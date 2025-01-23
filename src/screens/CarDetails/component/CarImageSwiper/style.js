import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { colors } from "../../../../../utils/constants/colors";

export const style = StyleSheet.create({
  swiper:{
    height:scale(250),
  },
  container:{
    height:scale(250),
    position:'relative',

  },

    secondContainer: {
      position:'absolute',
      bottom:scale(0),
      left:scale(0),
      zIndex:1000,
      width:scale(Dimensions.get('screen').width),
      alignItems:'center',
      justifyContent:'center',
      marginLeft:scale(-20),

    },
    circleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(5),
      flexDirection: 'row',
      marginVertical: scale(10),
      width:scale(Dimensions.get('screen').width),

    },
    circle: {
      height: scale(10),
      width: scale(10),
      borderRadius: '100%',
      backgroundColor: colors.lightGray,
    },
    activeTab: {
      height: scale(8),
      width: scale(40),
      backgroundColor: colors.darkBlue,
      borderRadius: scale(50),
    },
 
})