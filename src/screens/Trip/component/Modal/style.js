import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../../../../../utils/constants/colors";
import { poppinsRegular } from "../../../../../utils/constants/fontFamily";

export const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',
paddingHorizontal:scale(15),
  
  },
  secondContainer:{
    backgroundColor:colors.white,
    marginBottom:scale(50),
    width:'100%',
    paddingHorizontal:scale(15),
    paddingVertical:scale(15),
    borderRadius:scale(20),
  },
  headingContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
marginBottom:scale(15)

  }, 
  textStyle:{
    color:colors.darkBlue,
    fontSize:20,
    fontWeight:700,
  },
 simpleText:{
  color:colors.lightGray,
  lineHeight:scale(18),
 }
})