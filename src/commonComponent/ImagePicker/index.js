import { Image, Pressable, View } from "react-native"
import { style } from "./style"
import CustomText from "../CutstomText"
import { colors } from "../../../utils/constants/colors"
import { SvgXml } from "react-native-svg"
import { camera } from "../../../utils/constants/icons"

export default function ImagePicker({onPress, image}){
  return <Pressable style={style.container} onPress={onPress}>
{
  image?<Image source={{uri:image}} style={style.image}/>
  :<><SvgXml xml={camera} height={30} width={30}/>
<CustomText style={style.textStyle}>Add your photos here</CustomText></>
}
  </Pressable>
}