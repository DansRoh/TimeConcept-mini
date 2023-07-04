import { useEffect } from "react";
import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import Navbar from "@/components/Navbar/Navbar";
import GradientButton from "@/components/GradientButton/GradientButton";
import Spaceman from "@/components/Spaceman/Spaceman";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  useEffect(() => {
    console.log("homeeff");
  }, []);

  return (
    <View className='home-page page-wrapper'>
      <Navbar title='home'></Navbar>
      <GradientButton text='按钮'></GradientButton>
      <Spaceman></Spaceman>
    </View>
  );
}
