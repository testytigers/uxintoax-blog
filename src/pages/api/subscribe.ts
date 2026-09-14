import type { APIRoute } from "astro";

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// SendFox list that the "Signal vs Noise" welcome automation is triggered from.
const SENDFOX_LIST_ID = 673741;

function json(data: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async (context) => {
  const { request, locals } = context;

  let email: unknown;
  let source: unknown = "unknown";

  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const body = await request.json().catch(() => ({}) as Record<string, unknown>);
    email = body.email;
    source = body.source ?? source;
  } else {
    const body = await request.formData();
    email = body.get("email");
    source = body.get("source") ?? source;
  }

  if (!email || typeof email !== "string") {
    return json({ ok: false, error: "Email is required." }, 400);
  }

  const trimmed = email.trim().toLowerCase();

  if (!EMAIL_RE.test(trimmed)) {
    return json({ ok: false, error: "That email address doesn't look right." }, 400);
  }

  const runtimeEnv = (locals as { runtime?: { env?: Record<string, string> } }).runtime?.env;
  const SENDFOX_API_KEY = runtimeEnv?.SENDFOX_API_KEY || process.env.SENDFOX_API_KEY;

  if (!SENDFOX_API_KEY) {
    console.log(`[Signal vs Noise] New subscriber (no SendFox key set): ${trimmed} (${source})`);
    return json({ ok: true }, 200);
  }

  try {
    const response = await fetch("https://api.sendfox.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDFOX_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: trimmed,
        lists: [SENDFOX_LIST_ID],
      }),
    });

    if (response.status === 200 || response.status === 201 || response.status === 409) {
      // Created, or already on the list
      return json({ ok: true }, 200);
    }

    const errorBody = await response.text();
    console.error(`[Signal vs Noise] Sendfox error: ${response.status} ${errorBody}`);
    return json({ ok: false, error: "Something went wrong on our end. Please try again." }, 502);
  } catch (err) {
    console.error("[Signal vs Noise] Sendfox request failed:", err);
    return json({ ok: false, error: "Something went wrong on our end. Please try again." }, 502);
  }
};
