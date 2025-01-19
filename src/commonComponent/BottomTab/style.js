import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors } from "../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    height:scale(65),
    backgroundColor:colors.white,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    position:'relative',
    paddingHorizontal:scale(15),
  },
  innerContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:scale(40),
  },
  iconStyle:{
    position:'absolute',
    top:scale(-0),
    left:'50%',
    transform:[
      {translateY:'-50%'},
      {translateX:scale(-10)}

    ]
  }
})