import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants/colors';
import {scale} from 'react-native-size-matters';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    height: scale(630),
  },
    headerUI:{
      position:'absolute',
      top: scale(0),
      left:scale(0),
      zIndex:1000,
      width:'100%',
      height:scale(50),
      paddingHorizontal:scale(15),
      paddingVertical:scale(15),
    },
  outterContainer: {
    height: scale(89),
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingHorizontal: scale(15),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: scale(1),
    borderTopColor: colors.borderColor,
  },
  outterContainerHeadingText: {
    fontSize: scale(15),
    color: colors.darkBlue,
    fontWeight: 700,
  },
  outterBorderPriceText: {
    fontSize: scale(15),
    color: colors.bluePink,
  },
  outterContainerPressable: {
    paddingHorizontal: scale(30),
    paddingVertical: scale(15),
    backgroundColor: colors.darkBlue,
    borderRadius: scale(20),
  },
  outterContainerPressableText: {
    color: colors.white,
  },
});
