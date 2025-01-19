import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../../../../../utils/constants/colors';

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: scale(15),
    paddingVertical: scale(15),
    marginVertical: scale(15),
    borderWidth: scale(1),
    borderColor: colors.borderColor,
    borderRadius: scale(20),
  },
  activeContainer: {
    paddingHorizontal: scale(15),
    paddingVertical: scale(15),
    marginVertical: scale(15),
    borderWidth: scale(1),
    borderColor: colors.boderBlue,
    borderRadius: scale(20),
  },
  innerContainerForHeadingAndCheck: {
    flexDirection: 'row',
    alignItems: 'top',
    justifyContent: 'left',
    gap: scale(15),
  },
  activeTickContainer: {
    height: scale(25),
    width: scale(25),
    borderWidth: scale(1),
    borderColor: colors.boderBlue,
    backgroundColor: colors.boderBlue,
    borderRadius: scale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickContainer: {
    height: scale(25),
    width: scale(25),
    borderWidth: scale(1),
    borderColor: colors.borderColor,
    borderRadius: scale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: scale(16),
    color: colors.darkBlue,
    fontWeight: 700,
  },
  titleText: {
    color: colors.lightGray,
    width:'56%'
  },
  featureContainer: {
    marginVertical: scale(5),
    paddingLeft:scale(15),
  },
  featureText: {
    color: colors.lightGray,
    width:'56%'
  },
});
