// @ts-ignore
import { defineClientConfig } from "vuepress/client";
// @ts-ignore
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";

export default defineClientConfig({
    setup() {
        setupRunningTimeFooter(
            new Date("2019-10-01"),
            {
                "/": "小破站已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
                "/zh/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
            },
            true,
        );
    },
});
