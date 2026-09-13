import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://uxintoax.com",
  output: "hybrid",
  adapter: cloudflare({ imageService: "passthrough" }),
  integrations: [mdx(), tailwind()],
});
