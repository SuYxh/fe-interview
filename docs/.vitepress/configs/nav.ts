import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  {
    text: "基础",
    items: [
      { text: "HTML", link: "/fe/html/index" },
      { text: "CSS", link: "/fe/css/index" },
      { text: "JavaScript", link: "/fe/javascript/index" },
      { text: "手写代码", link: "/fe/javascript/write" },
      { text: "输出题", link: "/fe/javascript/output" },
    ],
    activeMatch: "^/fe",
  },
  {
    text: "框架",
    items: [
      { text: "Vue", link: "/frame/vue/index" },
      { text: "React", link: "/frame/react/index" },
    ],
    activeMatch: "^/frame",
  },
  {
    text: "工程化",
    items: [
      { text: "Vite", link: "/engineering/vite/index" },
      { text: "Webpack", link: "/engineering/webpack/index" },
      { text: "性能优化", link: "/engineering/performance/index" },
      { text: "Node", link: "/engineering/node/index" },
    ],
    activeMatch: "^/engineering",
  },
  { text: "网络", link: "/network/index", activeMatch: "^/network" },
  { text: "浏览器", link: "/browser/index", activeMatch: "^/browser" },
  { text: "算法", link: "/algorithm/index", activeMatch: "^/algorithm" },
  {
    text: "FAQ",
    items: [
      { text: "面经", link: "/faq/experience/index" },
      { text: "简历", link: "/faq/resume/index" },
      { text: "HR", link: "/faq/hr/index" },
    ],
    activeMatch: "^/faq",
  },
  // {
  //   text: "Me",
  //   items: [
  //     { text: "掘金", link: "https://juejin.cn/user/2084329779636094/posts" },
  //   ],
  // },
];
