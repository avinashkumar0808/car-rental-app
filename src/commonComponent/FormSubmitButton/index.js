import { Text, Pressable } from "react-native";
import { style } from "./style";

export default function SubmitButton({text, onPress}){
  return <Pressable style={style.button} onPress={onPress}>
    <Text style={style.text}>{text}</Text>
  </Pressable>
}