import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { colors } from "../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white,
    paddingHorizontal:scale(15),
  },
  headingText:{
    fontSize:scale(20),
    color:colors.darkBlue,
    fontWeight:700,
  },
  planContainer:{
marginBottom:scale(30),
  },
  lottieAnimation:{
    height:scale(80),
    width:scale(80),
  },
})