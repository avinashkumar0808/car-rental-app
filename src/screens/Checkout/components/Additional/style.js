import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../../../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',


  },
  headingText:{
    color:colors.darkBlue,
    fontSize:scale(15),
  },
  simpleText:{
    color:colors.lightGray,
    fontSize:scale(13),
  }
})