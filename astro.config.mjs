import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://ispp-2324-ocial.github.io',
  base: '/landing-page',
  integrations: [tailwind(), mdx(), sitemap()]
})