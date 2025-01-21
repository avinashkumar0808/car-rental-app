import { StyleSheet } from "react-native";

import { colors } from "../../../utils/constants/colors";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: scale(16),
  },
  dropdown: {
    height: scale(50),
    borderColor: colors.lightGray,
    borderWidth: scale(0.5),
    borderRadius: scale(15),
    paddingHorizontal: scale(8),
    marginVertical:scale(10)
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: scale(22),
    top: scale(8),
    zIndex: 999,
    paddingHorizontal: scale(8),
    fontSize: scale(14),
    color:colors.lightGray,
  
  },
  placeholderStyle: {
    fontSize: scale(12),
    color:colors.lightGray,
  },
  selectedTextStyle: {
    fontSize: scale(12),
    color:colors.lightGray,
  },
  

  inputSearchStyle: {
    height: scale(40),
    fontSize: scale(14),
  },
  text: {
      fontWeight: '700',
      color: colors.darkBlue,
      fontSize: scale(12),
    },
    iconStyle:{
      color:colors.borderColor,
      opacity:0.7,
    }
});
