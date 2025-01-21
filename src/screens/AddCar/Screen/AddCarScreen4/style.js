import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../../../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  innerContainer:{
    paddingHorizontal:scale(15),
  },
  headingtext:{
    fontSize:scale(16),
    color:colors.darkBlue,
    fontWeight:700
  },
  morePhotosButton:{
    paddingHorizontal:scale(15),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:scale(15),
    borderWidth:scale(0.5),
    paddingVertical:scale(15),
    borderColor:colors.lightGray,
    borderRadius:scale(15),
    marginVertical:scale(15),


  },
  addMoreText:{
    color:colors.lightGray
  },
  wrapper:{
    display:'none',
  },
  wrapperVisible:{
    display:'flex',
  }, 
  pressableButton:{
    paddingVertical:scale(10),
  },
  pressableButtonText:{
    textAlign:'center',
    fontSize:scale(15)
  }, 
  imagesContainer:{
    height:scale(100),
    paddingVertical:scale(10),
    marginVertical:scale(10),
  }, 
  image:{ 
    width:50,
    height:40,
    marginHorizontal:scale(5)
  }
})