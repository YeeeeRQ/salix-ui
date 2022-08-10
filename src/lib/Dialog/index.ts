import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import Dialog from "./Dialog.vue";

(Dialog as any).install = (app: App) => {
  app.component(Dialog.name, Dialog);
};

export default Dialog as SFCWithInstall<typeof Dialog>;
