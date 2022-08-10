import { App } from "vue";

import Button from "./Button";
import Switch from "./Switch";
import Input from "./Input";
import FormItem from "./FormItem";
import Form from "./Form";

const components = [Button, Switch, Input, Form, FormItem];

export { Button, Switch, Input, Form, FormItem };

export default function (app: App) {
  components.forEach((item) => app.component(item.name, item));
}
