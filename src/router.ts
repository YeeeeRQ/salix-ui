import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";

import Markdown from './components/Markdown.vue';
import GetStarted from './views/GetStarted.vue';
import Install from './views/Install.vue';

import DocDemo from "./components/demo/DocDemo.vue";
import SwitchDemo from './components/demo/SwitchDemo.vue';
import ButtonDemo from './components/demo/ButtonDemo.vue';
import DialogDemo from './components/demo/DialogDemo.vue';
import TabsDemo from './components/demo/TabsDemo.vue';

import { createWebHashHistory, createRouter } from "vue-router";
import { h } from "vue";


const loadMarkdown = filename => h(Markdown, {
  path: `../markdown/${filename}.md`,
  key:filename
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
        { path: "intro", component: loadMarkdown("intro")},
        { path: "get-started", component: loadMarkdown("get-started")},
        { path: "install", component: loadMarkdown("install")},
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});


