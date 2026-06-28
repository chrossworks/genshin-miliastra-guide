import { defineConfig } from "astro/config";
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: "https://chrossworks.github.io",
  base: "/genshin-miliastra-guide",
  markdown: {
    rehypePlugins: [
    [
      rehypeExternalLinks,
      {
        target: '_blank',
        rel: ['noopener', 'noreferrer'],
      },
    ],
    ],
  },
});