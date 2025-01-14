import { StyleSheet } from "react-native";
import { colors } from "../../../../../utils/constants/colors";
import { poppinsBold, poppinsExtraBold } from "../../../../../utils/constants/fontFamily";

export const style = StyleSheet.create({
  container:{
    marginVertical:20,
  marginHorizontal:20,

  },
  image:{
    borderRadius:30,

  },
  promoText:{
    fontSize:22,
    marginTop:10,
    fontWeight:'700',
    color:colors.darkBlue,
    fontFamily:poppinsBold

  }, 

})