import { View, Text, TouchableOpacity } from "react-native";

import { style } from "./style";

export default function HeadingText({headingText, simpleText, metadata}){
  console.log(metadata,'printing')
  return <View>
     <Text style={style.heading}>{headingText}</Text>
     <Text style={style.simpleText}>{simpleText} </Text>
     {metadata && <TouchableOpacity style={style.simpleTextContainer}>
      <Text style={style.simpleText}>email</Text>
      <Text style={style.email} > {metadata}</Text>
      </TouchableOpacity>}
  </View>
}