import { marked } from "marked";

export default function () {
  return {
    name: "md",
    transform(src, id) {
      if (id.endsWith(".md")) {
        return {
          code: `export default ${JSON.stringify(marked(src))}`,
          map: null,
        };
      }
    },
  };
}
