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
  carDetailHeadingText:{
    color:colors.darkBlue,
    fontWeight:600,
  },
keyValueContainer:{
  marginBottom:scale(15),
}, 
additionalContainer:{
  width:'98%',
},
discountCodeButton:{
  paddingVertical:scale(15),
  paddingHorizontal:scale(20),
  borderColor:colors.borderColor,
  borderWidth:scale(1),
  marginVertical:scale(15),
  position:'relative',

},
leftCircle:{
  height:scale(28),
  width:scale(28),
  left:scale(-18),
  position:'absolute',
  top:'50%',
  borderRadius:'100%',
  borderRightColor:colors.borderColor,
  borderRightWidth:scale(1.5),
  backgroundColor:colors.white,

},
rightCircle:{
  height:scale(26),
  width:scale(26),
  right:scale(-18),
  position:'absolute',
  top:'50%',
  borderRadius:'100%',
  borderLeftColor:colors.borderColor,
  borderLeftWidth:scale(1.5),
  backgroundColor:colors.white,

}
})