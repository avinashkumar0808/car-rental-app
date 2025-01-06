import {  SafeAreaView,Text, View } from "react-native";
import { style } from "./style";

export default function OTPVerify({route}){
  console.log(route.params.email)
 return (
  <SafeAreaView style={style.container}>
  <Text style={style.text} >{route.params.email}</Text>
  
</SafeAreaView>
 )
}