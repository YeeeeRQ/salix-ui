import "virtual:svg-icons-register";

import Markdown from "./components/Markdown.vue";
import "highlight.js/styles/github.css";
import "github-markdown-css";

import "./lib/salix.scss";

import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import libUses from "./lib";

const app = createApp(App);
app.use(router);
app.use(libUses);
app.mount("#app");
app.component("Markdown", Markdown);
