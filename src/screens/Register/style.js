import { StyleSheet } from "react-native";

import { colors } from "../../../utils/constants/colors";

export const style = StyleSheet.create({
  container:{
    flex:1,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 25,
  },
   iconContainer: {
    
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      flexDirection: 'row',
    },
    icon: {
      height: 50,
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.lightGray,
      borderRadius: '100%',
    },
    loginFooterText:{
      color:colors.lightGray
    },
    footerPressableButtonText:{
      color:colors.darkBlue,
      fontWeight:'600',
      paddingVertical:10,
      paddingRight:15,
    },
    loginFooter:{
      marginTop:10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    
    },
})