import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import Tab from "../Tabs/Tab.vue";

(Tab as any).install = (app: App) => {
  app.component(Tab.name, Tab);
};

export default Tab as SFCWithInstall<typeof Tab>;
