import type { APIRoute } from "astro";

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// SendFox lists, by name. The browser only ever sends the name, never an ID,
// so nobody can subscribe themselves to a list we did not offer.
// "book": the Signal vs Noise list, whose automation sends the PDF.
// "blog": the UXINTOAX newsletter; its ID comes from SENDFOX_BLOG_LIST_ID.
const BOOK_LIST_ID = 673741;
type ListName = "book" | "blog";

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
  let list: unknown = "book";

  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const body = await request.json().catch(() => ({}) as Record<string, unknown>);
    email = body.email;
    source = body.source ?? source;
    list = body.list ?? list;
  } else {
    const body = await request.formData();
    email = body.get("email");
    source = body.get("source") ?? source;
    list = body.get("list") ?? list;
  }

  const listName: ListName = list === "blog" ? "blog" : "book";

  if (!email || typeof email !== "string") {
    return json({ ok: false, error: "Email is required." }, 400);
  }

  const trimmed = email.trim().toLowerCase();

  if (!EMAIL_RE.test(trimmed)) {
    return json({ ok: false, error: "That email address doesn't look right." }, 400);
  }

  const runtimeEnv = (locals as { runtime?: { env?: Record<string, string> } }).runtime?.env;
  const SENDFOX_API_KEY = runtimeEnv?.SENDFOX_API_KEY || process.env.SENDFOX_API_KEY;
  const blogListId = Number(runtimeEnv?.SENDFOX_BLOG_LIST_ID || process.env.SENDFOX_BLOG_LIST_ID);
  const listId = listName === "blog" ? blogListId : BOOK_LIST_ID;

  if (!SENDFOX_API_KEY) {
    console.log(`[UXINTOAX] New ${listName} subscriber (no SendFox key set): ${trimmed} (${source})`);
    return json({ ok: true }, 200);
  }

  if (!Number.isInteger(listId) || listId <= 0) {
    console.error(`[UXINTOAX] No SendFox list ID configured for "${listName}" (set SENDFOX_BLOG_LIST_ID)`);
    return json({ ok: false, error: "Something went wrong on our end. Please try again." }, 500);
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
        lists: [listId],
      }),
    });

    if (response.status === 200 || response.status === 201 || response.status === 409) {
      // Created, or already on the list
      return json({ ok: true }, 200);
    }

    const errorBody = await response.text();
    console.error(`[UXINTOAX] Sendfox error: ${response.status} ${errorBody}`);
    return json({ ok: false, error: "Something went wrong on our end. Please try again." }, 502);
  } catch (err) {
    console.error("[UXINTOAX] Sendfox request failed:", err);
    return json({ ok: false, error: "Something went wrong on our end. Please try again." }, 502);
  }
};
