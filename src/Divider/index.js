import { View, Text } from "react-native"
import { style } from "./style"


export default function Devider({text}){
  return <View style={style.container}>
    <View style={style.line}></View>
    <Text style={style.text}>{text}</Text>
    <View style={style.line}></View>
  </View>
}