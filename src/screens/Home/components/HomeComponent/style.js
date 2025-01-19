import { StyleSheet } from "react-native";
import { colors } from "../../../../../utils/constants/colors";
import { poppinsExtraBold, poppinsRegular } from "../../../../../utils/constants/fontFamily";
import { scale } from "react-native-size-matters";

export const style = StyleSheet.create({
  container:{
    flex:1,

  },
  secondContainer:{
paddingHorizontal:15,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'left',
    gap: 5,
    flexDirection: 'row',
    marginVertical:5,
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: '100%',
    backgroundColor: colors.grey,
  },
  activeTab: {
    height: 10,
    width: 30,
    backgroundColor: '#192252',
    borderRadius: 50,
  },
  swiper:{

    height:420,
  },
  carDetailsHeading:{
    paddingVertical:15,
    paddingHorizontal:15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center'
  },
  carDetailsHeadingText:{
    fontSize:25,
    color:colors.darkBlue,
    fontWeight:'700',
    fontFamily:poppinsExtraBold
  },
  pressibleButton:{
    alignItems:"center",
    justifyContent:'center',
  },
  pressibleButtonText:{
    fontSize:14,
    color:colors.lightGray,
    fontFamily:poppinsRegular
  },
  homeFooter:{
    height:scale(70),
    width:'100%',
    backgroundColor:"red",
  }
})