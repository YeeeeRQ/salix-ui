import 'virtual:svg-icons-register'

import "github-markdown-css"
import Markdown from './components/Markdown.vue';
import 'highlight.js/styles/github.css';

import "./lib/salix.scss";

import { createApp } from "vue";
import App from "./App.vue";
import {router} from "./router";


const app = createApp(App);
app.use(router);
app.mount("#app");
app.component('Markdown', Markdown);
