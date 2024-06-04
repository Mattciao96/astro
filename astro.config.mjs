import { defineConfig } from "astro/config";
import react from '@astrojs/react';

const markdownConfigs = {
  shikiConfig: {
    // https://shiki.style/themes
    themes: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-macchiato',
    },
    // Add custom languages
    // Note: Shiki has countless langs built-in, including .astro!
    // https://shiki.style/languages
    langs: [],
    // Enable word wrap to prevent horizontal scrolling
    wrap: true,
    // Add custom transformers: https://shiki.style/guide/transformers
    // Find common transformers: https://shiki.style/packages/transformers
    transformers: [],
  },
}



export default defineConfig({
  site: "https://example.com",
  integrations: [react()],
  markdown: markdownConfigs,
});