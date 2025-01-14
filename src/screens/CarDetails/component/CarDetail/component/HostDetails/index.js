import { View, Image } from "react-native"
import CustomText from "../../../../../../commonComponent/CutstomText"
import { style } from "./style"

export default function HostDetails({hostDetails}){

  return <View style={style.container}>
    <View style={style.innerContainer}>
      <Image source={{uri:hostDetails.photo}} style={style.image}/>
      <View>
        <CustomText style={style.nameTextStyle}>{hostDetails.name}</CustomText>
        <CustomText style={style.addressTextStyle}>{hostDetails.address}</CustomText>
      </View>
    </View>

  <CustomText>⭐️ {hostDetails.ratings}</CustomText>
  </View>
}