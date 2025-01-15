import { StyleSheet } from "react-native";
import { colors } from "../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    flex:1,
    position:'absolute',
    top:0,
    bottom:0,
    zIndex:2000,
    backgroundColor:colors.backdropColor,
    width:'100%'
  }
})