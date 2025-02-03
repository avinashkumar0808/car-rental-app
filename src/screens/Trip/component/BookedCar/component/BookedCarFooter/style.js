import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../../../../../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'wrap',
    gap:scale(10)
  },
  button:{
    paddingHorizontal:scale(15),
    paddingVertical:scale(10),
    backgroundColor:colors.darkBlue,
    borderRadius:scale(8),
  },
  buttonText:{
    color:colors.white,
  },
  bookAgain:{
    backgroundColor:colors.white,
    paddingHorizontal:scale(15),
    paddingVertical:scale(10),
    borderWidth:scale(1),
    borderColor:colors.lightGray,
    borderRadius:scale(8),
  },
  innerContainer:{
    alignItems:'center',
    justifyContent:'center',


width:'100%',
  },
  deleteButton:{
    paddingHorizontal:scale(15),
    paddingVertical:scale(10),
    backgroundColor:'red',
    borderRadius:scale(8),
    marginBottom:scale(45),
    
  },
})