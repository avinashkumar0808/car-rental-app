import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../../../utils/constants/colors";

export const style  = StyleSheet.create({
  container:{
    height:200,
    backgroundColor:colors.white,
    alignItems:'center',
    justifyContent:'center',
    gap:scale(15),
  marginVertical:scale(10),
    borderRadius:scale(15),
    borderWidth:scale(1),
    borderColor:colors.lightGray,
    overflow:'hidden',
  },
  textStyle:{
    color:colors.lightGray,
    fontSize:scale(15),
  }, 
  image:{
    height:'100%',
    width:'100%'
  }
})