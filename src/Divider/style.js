import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:10,
    paddingVertical:20,
   
  },
  line:{
    height:1,
    width:"40%",
    backgroundColor:colors.lightGray,
    marginLeft:5,
    marginRight:5,
    flexShrink:1.2,
    opacity:0.4,
    
  },
  text:{
    marginLeft:5,
    marginRight:5,
    fontSize:15,
    color:colors.darkBlue
  }
})