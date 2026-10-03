import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://uxintoax.com",
  output: "hybrid",
  adapter: cloudflare({ imageService: "passthrough" }),
  integrations: [mdx(), tailwind()],
  // Old links keep working: the book used to live at the root, and the first
  // set of articles was replaced by a new series based on the book chapters.
  redirects: {
    "/download": "/noise-vs-signal-ai-book/download",
    "/blog/01-it-just-predicts-the-next-word": "/blog/ai-just-predicts-the-next-word",
    "/blog/02-the-apple-test-why-everyone-is-shouting-about-apples-nobody-can-taste": "/blog/the-apple-test",
    "/blog/03-why-it-lies-to-your-face-and-why-that-is-not-a-bug": "/blog/why-ai-makes-things-up",
    "/blog/04-the-confidence-trap-why-you-cannot-trust-what-the-model-sounds-like": "/blog/why-ai-makes-things-up",
    "/blog/05-the-three-defenses-against-fabrication": "/blog/why-ai-makes-things-up",
    "/blog/06-context-is-king-the-window-that-determines-everything": "/blog/what-ai-can-actually-see",
    "/blog/07-why-identical-questions-yield-different-answers": "/blog/what-ai-can-actually-see",
    "/blog/08-context-over-phrasing-stop-crafting-magic-prompts": "/blog/what-ai-can-actually-see",
    "/blog/09-the-four-habits-that-make-any-ai-session-useful": "/blog/what-ai-can-actually-see",
    "/blog/10-the-data-food-chain-plankton-shrimp-carp-dolphin-shark-whale": "/blog/garbage-in-garbage-out",
    "/blog/11-imperfect-data-at-scale-beats-perfect-data-on-a-tiny-sample": "/blog/garbage-in-garbage-out",
    "/blog/12-ai-moves-the-bottleneck-it-does-not-remove-the-human-loop": "/blog/garbage-in-garbage-out",
    "/blog/13-listening-is-a-skill-and-ai-does-not-have-it": "/blog/listening-is-a-skill-ai-does-not-have",
    "/blog/14-empathy-is-not-a-math-problem": "/blog/listening-is-a-skill-ai-does-not-have",
    "/blog/15-the-fast-intern-rule-what-to-delegate-and-what-to-keep": "/blog/the-fast-intern-rule",
    "/blog/16-what-ai-is-genuinely-strong-at-and-genuinely-weak-at": "/blog/the-fast-intern-rule",
    "/blog/17-the-death-of-the-pure-pixel-pusher": "/blog/ai-draws-the-screen-you-own-the-design",
    "/blog/18-the-happy-path-trap-why-ai-designs-look-good-until-they-ship": "/blog/ai-draws-the-screen-you-own-the-design",
    "/blog/19-vision-models-as-structural-auditors-not-just-pretty-generators": "/blog/ai-draws-the-screen-you-own-the-design",
    "/blog/20-from-static-mockups-to-live-code-the-new-designer-baseline": "/blog/ai-draws-the-screen-you-own-the-design",
    "/blog/21-prediction-is-cheap-validation-is-the-job": "/blog/ai-draws-the-screen-you-own-the-design",
    "/blog/22-the-agent-that-lied-to-me-why-self-reports-are-trustworthy-nowhere": "/blog/the-agent-that-lied-to-me",
    "/blog/23-one-task-one-action-one-verification": "/blog/the-agent-that-lied-to-me",
    "/blog/24-you-are-making-the-same-mistake-as-the-designer-who-trusts-unverified-quotes": "/blog/the-agent-that-lied-to-me",
    "/blog/25-two-architects-in-the-desert-strategy-beats-gear-every-time": "/blog/two-architects-in-the-desert",
    "/blog/26-buy-tools-not-strategy-why-new-plugins-give-you-the-wrong-answer": "/blog/two-architects-in-the-desert",
    "/blog/27-why-you-would-want-your-own-ai-setup": "/blog/why-you-might-want-your-own-ai-setup",
    "/blog/28-the-hybrid-setup-local-for-privacy-cloud-for-depth": "/blog/why-you-might-want-your-own-ai-setup",
    "/blog/29-running-local-ai-the-two-pieces-the-hardware-the-quantization": "/blog/running-ai-on-your-own-laptop",
    "/blog/30-the-future-does-not-belong-to-machines-%E2%80%94-it-belongs-to-people-who-ask-why": "/blog/what-stays-yours",
  },
});
