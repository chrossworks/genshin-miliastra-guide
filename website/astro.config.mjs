import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import remarkDirective from "remark-directive";
import remarkTweetEmbed from "./src/plugins/remarkTweetEmbed.mjs";

export default defineConfig({
  site: "https://chrossworks.github.io",
  base: "/genshin-miliastra-guide/",
  markdown: {
    remarkPlugins: [
      remarkDirective,
      remarkTweetEmbed,
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
});