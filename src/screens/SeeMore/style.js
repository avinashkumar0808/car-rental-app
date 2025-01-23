import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    flex:1,
   backgroundColor:colors.white,
width:'100%'
   
  },
  innerContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    gap:scale(5),



  }
})