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
width:'90%',
    margin:'auto'
  }, 
  textStyle:{
    color:colors.darkBlue,
    fontSize:20,
    fontWeight:700,
  },
  inputStyle:{

    paddingHorizontal:scale(16),
    height:scale(70),
    marginVertical:scale(15),
    marginHorizontal:scale(15),
    borderRadius:scale(20),
    borderWidth:scale(1),
    fontFamily:poppinsRegular,
    borderColor:colors.borderColor,
    color:colors.lightGray,
    fontSize:scale(11)
  }
})