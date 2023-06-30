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
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: "pages/home/index",
        text: "home",
      },
      {
        pagePath: "pages/mine/index",
        text: "mine",
      },
    ],
  },
});
