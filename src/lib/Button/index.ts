import { App } from "vue";
import { SFCWithInstall } from "../utils/types";
import Button from "./Button.vue";

Button.install = (app: App) => {
  app.component(Button.name, Button);
};

export default Button as SFCWithInstall<typeof Button>;
