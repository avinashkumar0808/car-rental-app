import { View } from "react-native";

import { style } from "./style";

export default function Backdrop({children}){
  return <View style={style.container}>
{children}
  </View>
}