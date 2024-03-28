import { defineUserConfig } from "vuepress";
// @ts-ignore
import { getDirname, path } from "vuepress/utils";


import theme from "./theme.js";
// @ts-ignore
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "侠探君的独立博客",
  description: "侠探君的独立博客",
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
        __dirname,
        "./components/BlogHero.vue",
    ),
  },
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
