import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../../../../../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
width:'100%',
marginVertical:scale(3),
paddingRight:scale(15),
   
  },
  key:{
    color:colors.lightGray,
  },
  value:{
    color:colors.darkBlue,
  }
})