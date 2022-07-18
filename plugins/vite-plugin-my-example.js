export default function myExample() {
  return {
    name: "my-example",
    option(opts){
      console.log('options', opts);
    },
    buildStart(){
      console.log('buildStart');
    },
    config(config){
      console.log('config',config);
      return {}
    },
    configResolved(resolvedConfig){
      console.log('configResolved');
    },
    configServer(server){
      console.log('configServer');
      // server.app.use((req, res, next) => {
      //   // custom handle request...
      // })
    },
    transformIndexHtml(html){
      console.log('transformIndexHtml');
      return html;
      // return html.replace(
      //   /<title>(.*?)<\/title>/,
      //   `<title>Title replaced!</title>`
      // )
    },

    // ID确认
    resolveId(source) {
      if (source === "virtual-module") {
        console.log('resolvedId', source);
        return source; //返回source表明命中， vite不在询问其他插件处理该id请求
      }
      return null; //返回 null, 表明是其他ID要继续处理
    },
    // 加载模块代码
    load(id) {
      if (id === "virtual-module") {
        console.log('load');
        return "export default 'This is virtual!'"; // 返回 virtual-module 模块源码
      }
      return null; //其他id继续处理
    },

    // 转换
    transform(code, id){
      if(id === 'virtual-module'){
        console.log('transform');
      }
      return code;
    }
  };
}
