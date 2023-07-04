/*
 * @Author: luoda
 * @Date: 2023-07-04 10:08:21
 * @LastEditTime: 2023-07-04 10:15:33
 * @LastEditors: luoda
 * @Description:
 */
import { View } from '@tarojs/components'
import './Spaceman.scss'

const Spaceman = () => {
  return (
    <>
      <View class='box-of-star1'>
        <View class='star star-position1'></View>
        <View class='star star-position2'></View>
        <View class='star star-position3'></View>
        <View class='star star-position4'></View>
        <View class='star star-position5'></View>
        <View class='star star-position6'></View>
        <View class='star star-position7'></View>
      </View>
      <View class='box-of-star2'>
        <View class='star star-position1'></View>
        <View class='star star-position2'></View>
        <View class='star star-position3'></View>
        <View class='star star-position4'></View>
        <View class='star star-position5'></View>
        <View class='star star-position6'></View>
        <View class='star star-position7'></View>
      </View>
      <View class='box-of-star3'>
        <View class='star star-position1'></View>
        <View class='star star-position2'></View>
        <View class='star star-position3'></View>
        <View class='star star-position4'></View>
        <View class='star star-position5'></View>
        <View class='star star-position6'></View>
        <View class='star star-position7'></View>
      </View>
      <View class='box-of-star4'>
        <View class='star star-position1'></View>
        <View class='star star-position2'></View>
        <View class='star star-position3'></View>
        <View class='star star-position4'></View>
        <View class='star star-position5'></View>
        <View class='star star-position6'></View>
        <View class='star star-position7'></View>
      </View>
      <View data-js='astro' class='astronaut'>
        <View class='head'></View>
        <View class='arm arm-left'></View>
        <View class='arm arm-right'></View>
        <View class='body'>
          <View class='panel'></View>
        </View>
        <View class='leg leg-left'></View>
        <View class='leg leg-right'></View>
        <View class='schoolbag'></View>
      </View>
    </>
  );
};

export default Spaceman;
