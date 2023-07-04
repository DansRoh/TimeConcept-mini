/*
 * @Author: luoda
 * @Date: 2023-07-03 16:59:28
 * @LastEditTime: 2023-07-03 17:32:09
 * @LastEditors: luoda
 * @Description:
 */

import { Button } from "@tarojs/components";

import "./GradientButton.scss";

const GradientButton = ({ text = "这是一个按钮" }) => {
  return (
    <Button className='button'>
      {text}
      <view className='hoverEffect'>
        <view></view>
      </view>
    </Button>
  );
};

export default GradientButton;
