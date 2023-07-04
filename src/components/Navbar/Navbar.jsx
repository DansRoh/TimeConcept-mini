/*
 * @Author: luoda
 * @Date: 2023-05-17 14:47:36
 * @LastEditTime: 2023-07-04 11:31:54
 * @LastEditors: luoda
 * @Description:
 */
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { useState, useEffect } from "react";

/**
 * 
 * @param {title, hideBack, backgroundColor, color, children} 
 * @returns 
 */
const NavBar = ({
  title,
  hideBack = false,
  backgroundColor = "unset",
  color = "#000",
  children,
}) => {
  const [statusBarHeight, setstatusBarHeight] = useState(0);
  const [navHeight, setnavHeight] = useState(0);
  const [navPaddingRight, setnavPaddingRight] = useState(0);
  useEffect(() => {
    const { statusBarHeight: statusBarHeightValue, windowWidth } =
      Taro.getSystemInfoSync();
    const { height, top, left } = Taro.getMenuButtonBoundingClientRect();

    setstatusBarHeight(statusBarHeightValue);
    setnavHeight((top - (statusBarHeightValue || 0)) * 2 + height);
    setnavPaddingRight(windowWidth - left + 10);
  }, []);

  const handleBackClick = () => {
    Taro.navigateBack();
  };

  return (
    <View>
      <View
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: navHeight + statusBarHeight + "px",
          paddingTop: statusBarHeight + "px",
          backgroundColor,
          width: "100vw",
          boxSizing: "border-box",
          color,
          paddingLeft: Taro.pxTransform(16),
          paddingRight: navPaddingRight + "px",
          zIndex: 9999,
        }}
      >
        {!hideBack && (
          <View onClick={handleBackClick}>
            <Text className='iconfont icon-left'></Text>
          </View>
        )}
        <Text>{title}</Text>
        {children}
      </View>
      {/* 添加一个同样高度的占位元素，防止内容被导航栏遮挡 */}
      <View style={{ height: statusBarHeight + navHeight + "px" }}></View>
    </View>
  );
};

export default NavBar;
