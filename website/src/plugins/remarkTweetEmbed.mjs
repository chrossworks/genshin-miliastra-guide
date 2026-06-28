import { visit } from "unist-util-visit";

export default function remarkTweetEmbed() {
  return (tree) => {
    visit(tree, "leafDirective", (node) => {
      if (node.name !== "tweet") return;

      const url = node.attributes?.url;
      if (!url) return;

      node.type = "html";
      node.value = `
<blockquote class="twitter-tweet">
  <a href="${url}"></a>
</blockquote>
`;
    });
  };
}