import { View,Text,ScrollView } from "react-native";

import BottomTab from "../../commonComponent/BottomTab";
import Header from "../../commonComponent/Header";
import { style } from "./style";
import CustomText from "../../commonComponent/CutstomText";

export default function Trip(){
  return <>
  <Header/>
   <ScrollView style={style.container}>
<CustomText>
  Trip
</CustomText>
  </ScrollView>
  <BottomTab/>
  </>
}