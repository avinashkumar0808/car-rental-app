import { StyleSheet } from "react-native";
import { colors } from "../../../utils/constants/colors";
import { scale } from "react-native-size-matters";

export const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white,
    padding:scale(15),
    
  }, 
  innerContainer:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:scale(3),
  },
  image:{
    height:scale(150),
    width:scale(150),
    borderRadius:scale(8),
  },
  headingText:{
    fontSize:scale(16),
    color:colors.darkBlue,
    marginVertical:scale(5),
    fontWeight:700,

  },
  simpleText:{
    fontSize:scale(14),
    color:colors.lightGray
  },
  lottieAnimation:{
    height:scale(80),
    width:scale(80),
  }
})