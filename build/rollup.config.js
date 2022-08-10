import { join } from "path";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import css from "rollup-plugin-css-only";
import esbuild from "rollup-plugin-esbuild";
import vuePlugin from "rollup-plugin-vue";
import del from "rollup-plugin-delete";

const baseOutput = (format) => ({
  format,
  file: `lib/${format}/index.js`,
});

export default ({ format }) => {
  const output =
    format === "esm"
      ? baseOutput(format)
      : {
          ...baseOutput(format),
          name: "Salix",
          exports: "named",
          globals: {
            vue: "Vue",
          },
        };
  return {
    input: join(__dirname, "..", "src/lib/index.ts"),
    output,
    plugins: [
      del({ targets: "lib/" + format }),
      terser(),
      nodeResolve(),
      scss({
        exclude: ["node_modules"],
        outputStyle: "compressed",
        prefix: `@import "src/assets/styles/global/variable.scss";`,
      }),
      css(),
      vuePlugin({
        include: /\.vue$/,
      }),
      esbuild({
        include: /\.[jt]sx?$/, // default, inferred from `loaders` option
        exclude: /node_modules/, // default
        minify: true,
        target: "esnext",
        tsconfig: "src/lib/tsconfig.json",
        loaders: {
          ".js": "jsx",
        },
      }),
    ],
  };
};
