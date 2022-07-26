import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import md2Vue from "./plugins/md";
import vueJsx from '@vitejs/plugin-vue-jsx';
// import globalStyle from '@originjs/vite-plugin-global-style';

const path = require("path");
// import myExample from './plugins/vite-plugin-my-example';

// import addSourceCode from './plugins/vite-plugin-vue-addSource';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
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
    // myExample(),
    // addSourceCode()
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  css:{
    preprocessorOptions: {
       scss: {
         additionalData: `@import "./src/assets/styles/global/variable.scss";`
       }
     }
  } 
});
