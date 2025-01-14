import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../../utils/constants/colors";
import { poppinsRegular } from "../../../../../utils/constants/fontFamily";

export const style = StyleSheet.create({
  container:{
  paddingVertical:15,
  alignItems:'center',
  flexDirection:'row',
justifyContent:'space-between',
paddingHorizontal:15,

  },
  leftTop:{
    alignItems:'center',
    justifyContent:'left',
    flexDirection:'row',
    gap:10,
    width:230,
  },
leftTopText:{
  fontSize:18,
  color:colors.grey,
  fontFamily:poppinsRegular
},
leftTopLargeTextContainer:{
  height:50,
},
leftTopLargeText:{

  fontWeight:'600',
  fontSize:15,
  fontFamily:poppinsRegular

},
headingRight:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  gap:30,
},
shimmer:{
  backgroundColor:colors.lightGray,
  width:210,
  height:50,
  borderRadius:20,
}

})