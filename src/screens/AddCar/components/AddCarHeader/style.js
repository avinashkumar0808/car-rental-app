import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../../../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    paddingHorizontal:scale(15),
    
  }
,
heading:{
  fontSize:scale(18),
  color:colors.darkBlue,
  fontWeight:700,

},
simpleText:{
  fontFamily:scale(14),
  color:colors.lightGray,
  marginVertical:scale(10),
}
})