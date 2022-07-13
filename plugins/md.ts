import {marked} from 'marked';

export default function () {
  return {
    name: "vitePluginMd2Vue",
    transform(src, id) {
      if (id.endsWith(".md")) {
        return {
          code: `import {h, defineComponent} from "vue";
                const _sfc_md = defineComponent({
                    name: "Markdown",
                });

                const _sfc_render =() => {
                    return h("article", {
                      innerHTML: ${JSON.stringify(marked(src))}, 
                      class:"markdown-body"
                    })
                };

                _sfc_md.render = _sfc_render
                export default _sfc_md`,
          map: null,
        };
      }
    },
  };
}
