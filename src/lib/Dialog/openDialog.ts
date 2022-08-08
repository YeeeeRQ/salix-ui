import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";

export const openDialog = (options) => {
  const { title, content, ok, cancel } = options;
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   createApp(Dialog).mount(div)

  const div = document.createElement("div");
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (!newVisible) {
              app.unmount();
              div.remove();
            }
          },
          ok,
          cancel,
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};
