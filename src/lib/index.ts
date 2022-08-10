import { App } from "vue";

import Button from "./Button";
import Switch from "./Switch";
import Input from "./Input";
import FormItem from "./FormItem";
import Form from "./Form";
import Tabs from "./Tabs";
import Tab from "./Tab";
import Dialog from "./Dialog";

import { openMessage } from "./Message";
import { openDialog } from "./Dialog";

const components = [Button, Switch, Input, Form, FormItem, Tabs, Tab, Dialog];

export {
  Button,
  Switch,
  Input,
  Form,
  FormItem,
  Tabs,
  Tab,
  openMessage,
  openDialog,
};

export default function (app: App) {
  components.forEach((item) => app.component(item.name, item));
}
