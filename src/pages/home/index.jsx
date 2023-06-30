import { useEffect } from 'react'
import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  useEffect(() => {
    console.log('homeeff');
  }, []);

  return (
    <View className='index'>
      <Text>Hello home!</Text>
    </View>
  );
}
