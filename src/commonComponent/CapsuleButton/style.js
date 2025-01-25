import {Button, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../../utils/constants/colors';
export const style = StyleSheet.create({
  Button: {
    paddingHorizontal: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(42),
    borderRadius: scale(10),
    borderColor: colors.borderColor,
    borderWidth: scale(1),
  },
  activeButton: {
    paddingHorizontal: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(42),
    borderRadius: scale(10),
    backgroundColor: colors.boderBlue,
  },
  text: {
    fontSize: scale(14),
    color: colors.darkBlue,
  },
  activeText: {
    fontSize: scale(14),
    color: colors.white,
  },
});
