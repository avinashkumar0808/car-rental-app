import { StyleSheet } from "react-native";
import { colors } from "../../../utils/constants/colors";
import { poppinsRegular } from "../../../utils/constants/fontFamily";

export const style = StyleSheet.create({
  button:{
    backgroundColor:colors.darkBlue,
    padding:15,
    marginTop:20,
    borderRadius:20
  },
  text:{
textAlign:'center',
color:'#fff',
fontWeight:"600",
fontFamily:poppinsRegular,
  }
})