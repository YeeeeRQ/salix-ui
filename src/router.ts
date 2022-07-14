import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";

import Markdown from './components/Markdown.vue';
import getStarted from './markdown/get-started.md';
import intro from './markdown/intro.md';
import install from './markdown/install.md';

import DocDemo from "./components/demo/DocDemo.vue";
import SwitchDemo from './components/demo/SwitchDemo.vue';
import ButtonDemo from './components/demo/ButtonDemo.vue';
import DialogDemo from './components/demo/DialogDemo.vue';
import TabsDemo from './components/demo/TabsDemo.vue';

import { createWebHashHistory, createRouter } from "vue-router";
import { h } from "vue";


const loadMarkdown = str=> h(Markdown, {
  content: str,
  key: (new Date()).getTime()
})

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", component: DocDemo},
        { path: "intro", component: loadMarkdown(intro)},
        { path: "get-started", component: loadMarkdown(getStarted)},
        { path: "install", component: loadMarkdown(install)},
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});


