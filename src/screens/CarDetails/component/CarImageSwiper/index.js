import { View } from "react-native";
import Swiper from "react-native-swiper";
import CarImage from "../CarImage";
import { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {SvgXml} from 'react-native-svg';

import { style } from "./style";
import { leftIconWhite } from "../../../../../utils/constants/icons";

export default function CarImageSwiper({currData}){
  const navigation = useNavigation()
const [activeIndexTab, setActiveIndexTab] = useState(0)
  return <View>
     <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.1)',
          'rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0)',
        ]}
        style={style.headerUI}>
        <SvgXml
          xml={leftIconWhite}
          height={40}
          width={40}
          onPress={() => navigation.goBack()}
        />
      </LinearGradient>
<Swiper  loop={false}
        onIndexChanged={index => {
          setActiveIndexTab(() => index);
        }}
        showsPagination={false}
        style={style.swiper}
>
{
  currData.moreImages.map((image)=><CarImage image={image} key={image}/>)
}
</Swiper>
<View style={style.secondContainer}>
        <View style={style.circleContainer}>
          <View
            style={
              activeIndexTab === 0 ? style.activeTab : style.circle
            }></View>
          <View
            style={
              activeIndexTab === 1 ? style.activeTab : style.circle
            }></View>
          <View
            style={
              activeIndexTab === 2 ? style.activeTab : style.circle
            }></View>
        </View>
      </View>
  </View>
}