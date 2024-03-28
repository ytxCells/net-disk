import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme({
  hostname: "https://mister-hope.github.io",
  author: {
    name: "侠探君",
    url: "https://pplay.fun",
  },
  //纯净模式
  //pure: true,
  //全屏按钮
  //fullscreen: true,
  //是否显示仓库按钮
  repoDisplay: false,
  iconAssets: "fontawesome-with-brands",

  logo: "",
  // 默认为 GitHub. 同时也可以是一个完整的 URL
  //repo: "https://pplay.fun",
  displayFooter: true,
  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "<a href=\"https://beian.miit.gov.cn\">浙ICP备2024062445号</a>",


  // 博客相关
  blog: {
    roundAvatar:true,
    avatar:"/head.png",
    description: "非澹泊无以明志,非宁静无以致远",
    intro: "/intro.html",
    medias: {
      Youtube: "https://www.youtube.com/channel/UCd4Mdy-0Auz2l6-dC2_Jm9A",
      BiliBili: "https://space.bilibili.com/15159425",
      WechatMP: "http://weixin.qq.com/r/RyjD2w-E1lKprUu4931V",
      AliDrive: "https://www.alipan.com/s/4BoHsxzppAV",
      baiduDisk: [
        "https://pan.baidu.com/s/1UFoxBNZ6qeUgwXiGpro26A?pwd=n7e8#list/path=%2F",
          "<svg t=\"1710901012952\" class=\"icon\" viewBox=\"0 0 1280 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2601\" width=\"200\" height=\"200\"><path d=\"M308.096 396.8a345.856 345.856 0 0 1-4.672-56.832C303.424 152.192 454.016 0 639.808 0c185.728 0 336.32 152.192 336.32 339.968 0 19.072-1.536 38.08-4.672 56.832C1142.016 397.76 1280 537.792 1280 710.4c0 173.184-138.88 313.6-310.272 313.6a307.712 307.712 0 0 1-221.056-93.568 78.4 78.4 0 0 1 0.448-109.568 76.416 76.416 0 0 1 111.68 3.008c28.16 27.648 66.624 44.736 109.056 44.736 86.4 0 156.416-70.784 156.416-158.08 0-87.36-70.08-158.08-156.416-158.08a154.88 154.88 0 0 0-103.424 39.424l-0.128-0.128-2.56 2.624c-3.072 2.816-6.016 5.76-8.832 8.896l-5.888 5.952 0.064 0.128-317.056 320.448A307.712 307.712 0 0 1 310.208 1024C138.944 1024 0 883.584 0 710.4c0-172.48 137.728-312.384 308.096-313.6z m2.304 471.808c86.4 0 156.416-70.784 156.416-158.08 0-87.36-70.08-158.08-156.416-158.08-86.4 0-156.416 70.72-156.416 158.08 0 87.296 70.016 158.08 156.416 158.08z m329.408-344.32c100.736 0 182.4-82.56 182.4-184.32 0-101.76-81.664-184.32-182.4-184.32s-182.4 82.56-182.4 184.32c0 101.76 81.664 184.32 182.4 184.32z\" fill=\"#06A7FF\" p-id=\"2602\"></path><path d=\"M821.184 367.104a71.296 71.296 0 0 1-0.448-8.32c0-40.896 34.752-73.984 77.632-73.984s77.632 33.088 77.632 73.984c0 3.136-0.192 6.208-0.64 9.28-10.432 167.744-156.608 300.736-335.36 300.736s-324.928-132.992-335.36-300.8a71.296 71.296 0 0 1-0.64-9.216c0-40.896 34.752-73.984 77.632-73.984s77.632 33.088 77.632 73.984c0 2.816-0.128 5.568-0.448 8.32C468.416 454.336 545.856 522.24 640 522.24c94.08 0 171.52-67.968 181.184-155.2z\" fill=\"#FF436A\" p-id=\"2603\"></path></svg>"
      ],
      quarkDisk: [
        "https://pan.quark.cn/s/9e28178c9ca0#/list/share",
        "<svg t=\"1710900586389\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2467\" width=\"200\" height=\"200\"><path d=\"M466.4832 1021.6448c-120.4736-10.6496-235.4176-65.024-317.6448-149.76-82.5344-85.2992-124.416-168.7552-144.4352-288.1024-5.2224-30.9248-5.9904-104.8064-1.28-135.2192 11.1616-75.1616 36.1472-146.432 70.2464-201.216C169.8816 91.6992 331.9296 0 509.952 0c75.9808 0 144.384 13.824 210.2784 42.6496 57.4976 25.2416 120.7296 70.144 163.1232 116.224 66.3552 72.0384 100.4544 133.376 125.44 225.9968 19.7632 73.0624 20.2752 175.7696 1.536 248.32-21.0944 80.384-49.7152 137.7792-101.2224 201.5232-44.7488 55.6544-91.8016 94.8736-153.7536 128.2048-65.0752 35.1232-125.184 52.5312-201.216 58.7776-37.1712 3.072-51.456 3.072-87.6544 0v-0.0512z m91.8528-260.5056c12.8-5.4784 22.6304-20.8384 22.6304-35.6352 0-25.4976 4.9664-54.3744 11.4688-67.072 13.312-26.0608 30.976-35.1232 84.5824-43.4688 20.7872-3.072 42.1376-7.5264 47.36-9.6256 14.848-6.5024 27.0848-18.944 35.1232-36.352 7.2704-15.872 7.5264-17.408 7.5264-58.0096-0.256-45.056-1.792-54.8864-17.408-95.232C726.4256 355.2768 665.6 294.912 605.184 273.1008a427.1104 427.1104 0 0 0-53.8624-13.5168c-28.6208-4.7104-34.048-4.9664-58.7776-2.048-48.896 5.632-79.104 15.3088-112.9472 35.584-21.3504 12.9536-22.8864 14.336-48.64 39.7312-37.7344 37.2224-57.2416 73.3696-69.2224 127.488-20.8384 94.8736 16.896 194.9696 96 255.3344 33.0752 25.1904 81.408 45.5168 116.5824 48.896 30.208 3.072 72.8576 1.28 84.0192-3.4304z\" fill=\"#3A25DD\" p-id=\"2468\"></path></svg>"
      ],
      ucDisk:[
          "https://drive.uc.cn/s/ef41a40b2fda4",
          "<svg t=\"1710901151729\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2736\" width=\"200\" height=\"200\"><path d=\"M48 48m139 0l650 0q139 0 139 139l0 650q0 139-139 139l-650 0q-139 0-139-139l0-650q0-139 139-139Z\" fill=\"#FF9500\" p-id=\"2737\"></path><path d=\"M437.742 815c-55.505 0-100.5-44.995-100.5-100.5S382.237 614 437.742 614s100.5 44.995 100.5 100.5S493.247 815 437.742 815z m0-55c25.129 0 45.5-20.371 45.5-45.5s-20.371-45.5-45.5-45.5-45.5 20.371-45.5 45.5 20.371 45.5 45.5 45.5z m-136.656-12.72c14.731 61.636 70.08 107.499 136.177 107.72h-0.02C228.242 863 172 703 172 675s0-110 76.818-204c76.817-94 76.424-107 48.424-165-18.667-38.667-60.414-42-125.242-10 60.161-85.333 130.575-128 211.242-128 65 2 155 58 155 128s-29 127-55 156-124 71-173 134c-32.667 42-37 100-13 174 1.314-4.336 2.595-8.576 3.844-12.72z m35.963-130.766c0.129-1.028 0.193-1.866 0.193-2.514 0-14 29-49.223 69-69s87-23 172 29 57 218 57 219c48 0 78.333 16.333 91 49-51.797 3.237-144.154 7.418-277.069 12.542 72.25-5.818 129.07-66.294 129.07-140.042 0-77.596-62.905-140.5-140.5-140.5-39.488 0-75.17 16.29-100.694 42.514zM443.242 503c43.333-30.667 108.333-26.333 195 13 130 59 112 48 165.314 58 53.314 10 47.686 48 46.686 48-15.333-12-52.333-6-111 18h-64c-8-17.333-26.333-42.667-55-76s-87.667-53.667-177-61z m95-44c70.667-31.333 115.333-56.333 134-75 12-190 64-29 66-27 81.333 38 118.885 95.667 112.655 173-57.103 4-91.655 4-103.655 0-50.748-29.333-120.415-53-209-71z\" fill=\"#FFFFFF\" p-id=\"2738\"></path></svg>"
      ]
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/exam/": ["970125"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    seo: true,
    blog: true,
    searchPro: {
      indexContent: true,
    },
    //代码复制
    copyCode:true,
    // 在启用之前需要安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务器，在生产环境中请自行部署并使用自己的服务器！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://blog-399lngxla-ytxcells-projects.vercel.app",
    // },
    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      //任务列表
      tasklist: true,
      //启用 GFM警告
      alert: true,
      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js 幻灯片
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
        themes: [
          "auto",
          "beige",
          "black",
          "blood",
          "league",
          "moon",
          "night",
          "serif",
          "simple",
          "sky",
          "solarized",
          "white",
        ],
      },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },
    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
},
    {
      custom: true,
    }
    );
