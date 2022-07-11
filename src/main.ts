import 'virtual:svg-icons-register'

import "./lib/salix.scss";

import { createApp } from "vue";
import App from "./App.vue";
import {router} from "./router";


const app = createApp(App);
app.use(router);
app.mount("#app");
