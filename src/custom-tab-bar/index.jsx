/*
 * @Author: luoda
 * @Date: 2023-06-30 10:06:53
 * @LastEditTime: 2023-06-30 11:38:34
 * @LastEditors: luoda
 * @Description:
 */
import { useState, useEffect } from "react";
import { switchTab, getCurrentPages } from "@tarojs/taro";
import { CoverView, CoverImage } from "@tarojs/components";

import tabbar_home_on from "../images/tabbar_home_on.png";
import tabbar_home from "../images/tabbar_home.png";
import tabbar_mine_on from "../images/tabbar_mine_on.png";
import tabbar_mine from "../images/tabbar_mine.png";

import "./index.scss";

const tabbarConfig = {
  color: "#000000",
  selectedColor: "#DC143C",
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
    <CoverView className='tab-bar'>
      <CoverView className='tab-bar-border'></CoverView>
      {list.map((item, index) => {
        return (
          <CoverView
            key={index}
            className='tab-bar-item'
            onClick={() => handleSwitchTab(item.pagePath)}
          >
            <CoverImage
              src={selected === index ? item.selectedIconPath : item.iconPath}
            />
            <CoverView
              style={{ color: selected === index ? selectedColor : color }}
            >
              {item.text}
            </CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
}

export default CustomTabBar;
