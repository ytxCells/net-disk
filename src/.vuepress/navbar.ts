import { navbar } from "vuepress-theme-hope";

export default navbar([
    "/",
  // "/demo/",
    "/article/",
    "/category/",
    "/tag/",
  {
    text: "备考笔记",
    icon: "graduation-cap",
    link:  "/exam/",
  },

]);
