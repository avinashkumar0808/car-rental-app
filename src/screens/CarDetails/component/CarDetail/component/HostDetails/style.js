import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../../../../../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:scale(25),
    width:'90%',
    paddingRight:scale(15),
  },
  image:{
    height:scale(70),
    width:scale(70),
    borderRadius:scale(20)
  },
  innerContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:scale(10),
  },
  nameTextStyle:{
    color:colors.darkBlue,
    fontWeight:600,
    fontSize:scale(15),

  },
  addressTextStyle:{
    color:colors.lightGray,
    fontWeight:100,
    marginTop:scale(-4)
  }
})