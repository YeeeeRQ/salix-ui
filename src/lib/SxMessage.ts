import Message from "./Message.vue";
import { createApp, h } from "vue";

export const openMessage = (options) => {
  const { content } = options;

  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   createApp(Dialog).mount(div)

  const div = document.createElement("div");
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        Message,
        {
          visible: true,
        },
        {
          content,
        }
      );
    },
  });
  app.mount(div);
};
