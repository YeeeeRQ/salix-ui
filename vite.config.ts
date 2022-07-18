import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import md2Vue from "./plugins/md";

const path = require("path");
const fs= require("fs");
import {baseParse} from '@vue/compiler-core';
import myExample from './plugins/vite-plugin-my-example';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/icons")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: "__svg__icons__dom__",
    }),
    md2Vue(),
    myExample()
  ],
    //   vueCustomBlockTransforms: {
    //   demo: (options) => {
    //     const { code, path } = options
    //     const file = fs.readFileSync(path).toString()
    //     const parsed = baseParse(file).children.find(n => n.tag === 'demo')
    //     const main = file.split(parsed.loc.source).join('').trim()
    //     return `export default function (Component) {
    //       Component.__sourceCode = ${
    //       JSON.stringify(main)
    //       }
    //     }`.trim()
    //   }
    // }
});
