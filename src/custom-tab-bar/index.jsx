/*
 * @Author: luoda
 * @Date: 2023-06-30 10:06:53
 * @LastEditTime: 2023-07-04 09:52:23
 * @LastEditors: luoda
 * @Description:
 */
import { useState, useEffect } from "react";
import { switchTab, getCurrentPages } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";

import tabbar_home_on from "../images/tabbar_home_on.png";
import tabbar_home from "../images/tabbar_home.png";
import tabbar_mine_on from "../images/tabbar_mine_on.png";
import tabbar_mine from "../images/tabbar_mine.png";

import "./index.scss";

const tabbarConfig = {
  color: "#666666",
  selectedColor: "#4594d5",
  list: [
    {
      pagePath: "/pages/home/index",
      selectedIconPath: tabbar_home_on,
      iconPath: tabbar_home,
      text: "home",
    },
    {
      pagePath: "/pages/mine/index",
      selectedIconPath: tabbar_mine_on,
      iconPath: tabbar_mine,
      text: "mine",
    },
  ],
};

function CustomTabBar() {
  const { list, color, selectedColor } = tabbarConfig;
  const pages = getCurrentPages();
  const currentPage = pages[0];
  const [selected, setselected] = useState(0);

  useEffect(() => {
    const index = list.findIndex(
      (item) => item.pagePath === "/" + currentPage.route
    );
    if (index > -1) {
      setselected(index);
    }
  }, [currentPage.route]);

  const handleSwitchTab = (url) => {
    switchTab({ url });
  };

  return (
    <View className='tab-bar'>
      {list.map((item, index) => {
        return (
          <View
            key={index}
            className='tab-bar-item'
            onClick={() => handleSwitchTab(item.pagePath)}
          >
            <Image
              src={selected === index ? item.selectedIconPath : item.iconPath}
            />
            <View
              style={{ color: selected === index ? selectedColor : color }}
            ></View>
          </View>
        );
      })}
    </View>
  );
}

export default CustomTabBar;
