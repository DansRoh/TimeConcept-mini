export default defineAppConfig({
  pages: ["pages/home/index", "pages/mine/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: "pages/home/index",
      },
      {
        pagePath: "pages/mine/index",
      },
    ],
  },
});
