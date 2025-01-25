import { StyleSheet } from "react-native";
import { colors } from "../../../utils/constants/colors";
import { poppinsRegular } from "../../../utils/constants/fontFamily";
import { scale } from "react-native-size-matters";

export const style = StyleSheet.create({
  button:{
    backgroundColor:colors.darkBlue,
    padding:scale(15),
    marginTop:scale(18),
    borderRadius:scale(8),
    marginVertical:scale(18)
  },
  text:{
textAlign:'center',
color:'#fff',
fontWeight:"600",
fontFamily:poppinsRegular,
fontSize:scale(15),
  }
})