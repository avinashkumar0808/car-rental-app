import { StyleSheet } from "react-native";
import { colors } from "../../../utils/constants/colors";
import { scale } from "react-native-size-matters";

export const style = StyleSheet.create({
  container:{
  paddingVertical:scale(15),
    flex:1,
    backgroundColor:colors.white,
    paddingHorizontal:scale(15),

  },
  lottieAnimation:{
    height:scale(80),
    width:scale(80),
  },
  headingText:{
    fontSize:scale(20),
    color:colors.darkBlue,
    fontWeight:700,

  }
})