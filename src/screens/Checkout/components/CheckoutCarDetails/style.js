import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../../../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'top',
    justifyContent:'space-between',
    width:'100%',
    paddingVertical:scale(15),
  },
  image:{
    height:scale(70), 
    width:scale(70),
  borderRadius:scale(20),
  },
  headingText:{
    fontSize:scale(15),
    fontWeight:700,
    color:colors.darkBlue
  },
  price:{
    color:colors.bluePink,
    fontSize:scale(15),
    marginVertical:scale(5)

  },
  bottomText:{
    color:colors.lightGray,
    marginTop:scale(-7)
  }

})