import { scale } from "react-native-size-matters";

import { StyleSheet } from "react-native";
import { colors } from "../../../utils/constants/colors";

export const style = StyleSheet.create({
conatiner:{
alignItems:'top',
justifyContent:'center',
flexDirection:'row',
gap:scale(10),
paddingHorizontal:scale(15),
backgroundColor:colors.white
}, 
imageAndTextContainer:{
height:scale(70),
position:'relative',
},
image:{
  height:scale(70),
  width:scale(70),
  borderWidth:scale(1),
  borderColor:colors.borderColor,
  borderRadius:20,
},
ratingsOnImage:{
  position:'absolute',
  zIndex:1000,
  width:scale(70),
  textAlign:'center',
  backgroundColor:colors.white,
  bottom:scale(-10),
fontSize:scale(10),
borderRadius:scale(8),
borderWidth:scale(0.3),
borderColor:colors.borderColor
},
nameAndDateContainer:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  gap:scale(45),
width:'80%',
  
},
commentParagaraphContainer:{
  width:'80%',
  paddingVertical:scale(15)
},
nameText:{
  fontSize:scale(15),
  color:colors.darkBlue,
  
},
dateText:{
  color:colors.lightGray,
},
commentText:{
  color:colors.lightGray
},

})