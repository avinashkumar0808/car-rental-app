import { StyleSheet } from "react-native";
import { colors } from "../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    flex:1,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 25,
    
   
  },
  otpContainer:{
    marginVertical:25,
    paddingHorizontal:40
  },
  timer:{
    textAlign:'center',
    color:colors.darkBlue,
    padding:20,
    height:80,
  },
  footer:{
    paddingVertical:20,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    height:80,
  },
  link:{
marginLeft:4,
color:colors.darkBlue,
paddingVertical:10,
fontWeight:'700'
  },
  text:{
    color:colors.lightGray
  },
  pinCodeContainer:{
    height:80,
    width:80,
    borderRadius:20,
    borderColor:colors.lightGray


  },
  otpContainer:{
    paddingHorizontal:15,
    alignItems:'center',
    justifyContent:'center',
    gap:10,
    paddingVertical:20,
  },
  pinCodeText:{
    fontSize:20,
  }
})
