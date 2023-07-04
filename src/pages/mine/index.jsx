import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import Navbar from '@/components/NavBar/Navbar'

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className='index page-wrapper'>
      <Navbar title='mine'></Navbar>
      <Text>mine!</Text>
    </View>
  );
}
