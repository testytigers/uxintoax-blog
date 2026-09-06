import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.formData();
  const email = body.get("email");

  if (!email || typeof email !== "string") {
    return new Response("Email is required", { status: 400 });
  }

  const trimmed = email.trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return new Response("Invalid email", { status: 400 });
  }

  const SENDFOX_API_KEY = process.env.SENDFOX_API_KEY;

  if (!SENDFOX_API_KEY) {
    // In production, this env var is set in Cloudflare Pages dashboard
    // For development/preview, log the email
    console.log(`[Signal vs Noise] New subscriber: ${trimmed}`);
    return new Response("Subscribed", { status: 200 });
  }

  try {
    const response = await fetch("https://api.sendfox.com/contacts", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SENDFOX_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: trimmed,
        TAGS: ["signal-vs-noise"],
      }),
    });

    if (response.status === 409 || response.status === 200) {
      // Contact already exists or created successfully
      return new Response("Subscribed", { status: 200 });
    }

    // Any other error
    const errorBody = await response.text();
    console.error(`[Signal vs Noise] Sendfox error: ${response.status} ${errorBody}`);
    return new Response("Subscription failed", { status: 500 });
  } catch (err) {
    console.error("[Signal vs Noise] Sendfox request failed:", err);
    return new Response("Subscription failed", { status: 500 });
  }
};
