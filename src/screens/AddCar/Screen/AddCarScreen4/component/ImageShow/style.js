import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const style = StyleSheet.create({

  container:{

    position:'relative',
    height:scale(500),
    borderRadius:scale(15),
    marginVertical:scale(15),
    width:scale(300),
    margin:'auto',
    overflow:'hidden',
  },
  closeIconContainer:{
position:'absolute',
zIndex:1000,
right:scale(0),
top:scale(0),
alignItems:'center',
justifyContent:'center',
height:scale(44),
width:scale(44)
  },
  innerContainer:{
    height:scale(500),
    width:scale(300),
  
  }

})