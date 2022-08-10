import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import Tabs from "./Tabs.vue";

Tabs.install = (app: App) => {
  app.component(Tabs.name, Tabs);
};

export default Tabs as SFCWithInstall<typeof Tabs>;
