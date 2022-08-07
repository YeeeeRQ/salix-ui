import Message from "./Message.vue";
import { createApp } from "vue";

export const openMessage = (options) => {
  const { content } = options;

  createMessage();
};


const createMessage = ()=>{
  const container = document.createElement("div");
  document.body.appendChild(container);
  const app = createApp({
    render() {
      return (
      <Message 
        // center={false}
        // duration={3000}
        type={"success"}
      >
        hello
      </Message>
      )
    },
  });
  app.mount(container);
}