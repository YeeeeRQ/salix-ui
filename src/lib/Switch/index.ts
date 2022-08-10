import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import Switch from "./Switch.vue";

Switch.install = (app: App) => {
  app.component(Switch.name, Switch);
};

export default Switch as SFCWithInstall<typeof Switch>;
