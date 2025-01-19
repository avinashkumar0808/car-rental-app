import { StyleSheet } from "react-native";
import { colors } from "../../../utils/constants/colors";
import { scale } from "react-native-size-matters";

export const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white,
    paddingHorizontal:scale(15),
  },
  headingText:{
    fontSize:scale(23),
    color:colors.darkBlue,
    fontWeight:700,
    marginVertical:scale(30),
  },
  innerContainer:{
    alignItems:'center',
    justifyContent:'center',
    gap:scale(10),
    marginBottom:scale(120),
  }, 
  image:{
    height:scale(200),
    width:scale(280),
  }, 
  smallHeading:{
textAlign:'center',
fontSize:scale(16),
color:colors.darkBlue,
fontWeight:700,
  },
  simpleText:{
    fontSize:scale(13),
    textAlign:'center',
    color:colors.lightGray
  }
})