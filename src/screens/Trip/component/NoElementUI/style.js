import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import { colors } from '../../../../../utils/constants/colors';

export const style = StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(10),
    marginBottom: scale(120),
  },
  image: {
    height: scale(200),
    width: scale(280),
  },
  smallHeading: {
    textAlign: 'center',
    fontSize: scale(16),
    color: colors.darkBlue,
    fontWeight: 700,
  },
  simpleText: {
    fontSize: scale(13),
    textAlign: 'center',
    color: colors.lightGray,
  },
});
