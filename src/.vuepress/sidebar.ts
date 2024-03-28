import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      // 必要的，分组的标题文字
      text: "如何使用",
      // 可选的, 分组标题对应的图标
      icon: "laptop-code",
      // 可选的，会添加到每个 item 链接地址之前
      prefix: "demo/",
      // 可选的, 分组标题对应的链接
      link: "demo/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: false,
      // 必要的，分组的子项目 structure 从文件结构中自动生成
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
    {
      text: "幻灯片2",
      icon: "person-chalkboard",
      link: "http://192.168.123.108:8080/demo/ppt.html",
    },
  ],
  "/exam/":[
    {
      text: "信息系统项目管理师",
      icon: "book",
      prefix: "信息系统项目管理师/",
      link: "信息系统项目管理师/",
      children: "structure",
    },
    {
      text: "信息系统开发与管理",
      icon: "book",
      prefix: "信息系统开发与管理/",
      link: "信息系统开发与管理/",
      children: "structure",
    },
    {
      text: "信息资源管理",
      icon: "book",
      prefix: "信息资源管理/",
      link: "信息资源管理/",
      children: "structure",
    },
    {
      text: "数据结构导论",
      icon: "book",
      prefix: "数据结构导论/",
      link: "数据结构导论/",
      children: "structure",
    },
    {
      text: "操作系统概论",
      icon: "book",
      prefix: "操作系统概论/",
      link: "操作系统概论/",
      children: "structure",
    },
    {
      text: "实践课程",
      icon: "book",
      prefix: "实践课程/",
      link: "实践课程/",
      children: "structure",
    },
  ],
});
