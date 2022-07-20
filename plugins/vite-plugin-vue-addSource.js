const fs = require("fs");
import { baseParse } from "@vue/compiler-core";

export default function addSource() {
  return {
    name: "addSource",

    // 转换
    transform(src, id) {
      // return;

      const vueReg = /\.demo\.vue$/i;
      if (!vueReg.test(id)) {
        return;
      }

      console.log("id:", id);

      // return ;
      const file = fs.readFileSync(id).toString();
      // console.log('file:',file)

      const parsed = baseParse(file).children.find((n) => n.tag === "demo");
      // console.log("parsed:", parsed);

      if (parsed) {
        const main = file.split(parsed.loc.source).join("").trim();
        // console.log("main:", main);
        // src.__sourceCode = 'hello';
        return {
          code:compileFileToJS(src),
          __sourceCode : 'hello'
        }

        return ;
        return `export default Comp=> {
            console.log('Comp: ',Comp);
            // Comp.__sourceCode = ${JSON.stringify(main)}
            // return Comp
          }`;
      }

      return ;
      // return code;
      return `export default Comp => {
            Comp.__sourceCode= 'helloworld'
        }`;
    },
  };
}
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
