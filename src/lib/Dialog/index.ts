import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import Dialog from "./Dialog.vue";

(Dialog as any).install = (app: App) => {
  app.component(Dialog.name, Dialog);
};

export default Dialog as SFCWithInstall<typeof Dialog>;

import { createApp, h } from "vue";

export const openDialog = (options) => {
  const { title, content, ok, cancel } = options;

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
