import { View, Text } from "react-native";

import { style } from "./style";

export default function HeadingText({headingText, simpleText}){
  return <View>
     <Text style={style.heading}>{headingText}</Text>
     <Text style={style.simpleText}>{simpleText} </Text>
  </View>
}