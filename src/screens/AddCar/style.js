import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  inputContainer:{
    paddingHorizontal:scale(15)
  },
  buttonContainer:{
    marginTop:scale(110),
  }
})