import { visit } from "unist-util-visit";

export default function remarkTweetEmbed() {
  return (tree) => {
    visit(tree, "leafDirective", (node) => {
      if (node.name !== "tweet") return;

      const url = node.attributes?.url;
      if (!url) return;

      const embedUrl = url.replace("https://x.com/", "https://twitter.com/");

      node.type = "html";
      node.value = `
<blockquote class="twitter-tweet">
  <a href="${embedUrl}">Xのポストを見る</a>
</blockquote>
`;
    });
  };
}