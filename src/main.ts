import 'virtual:svg-icons-register'

import Markdown from './components/Markdown.vue';
import 'highlight.js/styles/github.css';
import "github-markdown-css"

import "./lib/salix.scss";

import { createApp } from "vue";
import App from "./App.vue";
import {router} from "./router";

import vm from 'virtual-module';
console.log('vm:',vm)

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component('Markdown', Markdown);
