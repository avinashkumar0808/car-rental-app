import { View } from "react-native";
import { SvgXml } from "react-native-svg";

import CustomText from "../../../../commonComponent/CutstomText";
import { rightArrow } from "../../../../../utils/constants/icons";
import { style } from "./style";

export default function Additional({heading, text}){
  return <View style={style.container}>
    <View>
<CustomText style={style.headingText}>{heading}</CustomText>
<CustomText style={style.simpleText}>{text}</CustomText>
    </View>
    <SvgXml xml={rightArrow} height={30} width={30}/>
  </View>
}