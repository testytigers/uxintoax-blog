import type { APIRoute } from "astro";

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(data: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

/**
 * Receives a reader review. Reviews are never published automatically:
 * they are forwarded to REVIEW_WEBHOOK_URL (Slack, Discord, Zapier, Make…)
 * for a human to read first. Without a webhook they are only logged.
 */
export const POST: APIRoute = async ({ request, locals }) => {
  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;

  const name = clean(body.name, 80);
  const role = clean(body.role, 80);
  const review = clean(body.review, 1200);
  const email = clean(body.email, 160).toLowerCase();

  if (!name) return json({ ok: false, error: "Please fill in your name." }, 400);
  if (review.length < 20) return json({ ok: false, error: "Please write at least a couple of sentences." }, 400);
  if (body.consent !== true) return json({ ok: false, error: "Please tick the box so the review can be published." }, 400);
  if (email && !EMAIL_RE.test(email)) return json({ ok: false, error: "That email address doesn't look right." }, 400);

  const entry = { name, role, review, email, receivedAt: new Date().toISOString() };

  const runtimeEnv = (locals as { runtime?: { env?: Record<string, string> } }).runtime?.env;
  const webhook = runtimeEnv?.REVIEW_WEBHOOK_URL || process.env.REVIEW_WEBHOOK_URL;

  if (!webhook) {
    console.log("[Signal vs Noise] New review (no REVIEW_WEBHOOK_URL set):", JSON.stringify(entry));
    return json({ ok: true }, 200);
  }

  const summary = `New review for Signal vs Noise\n${name}${role ? `, ${role}` : ""}${email ? ` <${email}>` : ""}\n\n${review}`;

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // `text` for Slack, `content` for Discord, the rest for Zapier / Make
      body: JSON.stringify({ text: summary, content: summary, ...entry }),
    });
    if (!response.ok) {
      console.error(`[Signal vs Noise] Review webhook error: ${response.status} ${await response.text()}`);
      return json({ ok: false, error: "Something went wrong on our end. Please try again." }, 502);
    }
    return json({ ok: true }, 200);
  } catch (err) {
    console.error("[Signal vs Noise] Review webhook failed:", err);
    return json({ ok: false, error: "Something went wrong on our end. Please try again." }, 502);
  }
};
