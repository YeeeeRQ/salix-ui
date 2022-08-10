import { App } from "vue";

type SFCWithInstall<T> = T & { install(app: App): void };

export { type SFCWithInstall };
