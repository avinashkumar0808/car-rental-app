import { View, Image } from "react-native";

import CustomText from "../../../../commonComponent/CutstomText";
import { style } from "./style";

export default function CheckoutCarDetails({currData}){
  console.log(currData)
  return <View style={style.container}>
<View>
  <CustomText style={style.headingText}>{currData?.carName}</CustomText>
  <CustomText style={style.price}>£{currData?.fare}.00 / day</CustomText>
  <CustomText style={style.bottomText}>{currData?.address}, Aug 23 - 26 2021</CustomText>
</View>
<Image source={{uri:currData?.frontImageURL}} style={style.image}/>
  </View>
}