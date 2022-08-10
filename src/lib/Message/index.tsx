import Message from "./Message.vue";
import { h, render, VNode } from "vue";

let id = 0;

interface InstanceType {
  container: HTMLDivElement;
  vnode: VNode;
  options: any;
}
const instances: InstanceType[] = [];

export const openMessage = (options) => {
  const gap = 20;
  let offset = options.offset || gap;
  instances.forEach((i) => {
    offset += i.vnode.el!.offsetHeight + gap;
  });

  // 函数劫持
  let userClose = options.onClose;
  let opts = {
    ...options,
    offset,
    id: id++,
    onClose: () => {
      userClose?.();
    },
  };
  createMsg(opts);
};

const createMsg = (options) => {
  const container = document.createElement("div");

  const vnode = h(Message, options);
  console.log("create options:", options);

  // 强制挂载onDestroy函数
  vnode.props!.onDestroy = (delID: number) => {
    console.log("del:", delID);
    render(null, container);

    let move = 0;
    if (delID + 1 <= instances.length - 1) {
      move =
        instances[delID + 1].options.offset - instances[delID].options.offset;
    }

    for (let i = delID + 1; i < instances.length; i++) {
      const { container, options } = instances[i];

      let newOptions = { ...options };
      newOptions.offset -= move;
      newOptions.id--;

      const newVNode = h(Message, newOptions);
      render(newVNode, container);
      instances[i].options = newOptions;
    }

    instances.splice(delID, 1);
    id--;
    if (instances.length === 0) id = 0;
  };

  render(vnode, container);
  document.body.appendChild(container.firstElementChild!);

  instances.push({ container, vnode, options });
};
