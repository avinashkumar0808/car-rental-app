import { View, Image } from "react-native";

import CustomText from "../../../../commonComponent/CutstomText";
import { style } from "./style";

export default function CheckoutCarDetails({currData}){
  console.log(currData)
  return <View style={style.container}>
<View>
  <CustomText style={style.headingText}>{currData.name}</CustomText>
  <CustomText style={style.price}>£{currData.fare}.00 / day</CustomText>
  <CustomText style={style.bottomText}>Los Santos, Aug 23 - 26 2021</CustomText>
</View>
<Image source={{uri:currData.image}} style={style.image}/>
  </View>
}