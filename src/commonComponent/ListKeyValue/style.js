import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../../../utils/constants/colors';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    gap: scale(5),

    
  },
  key: {
    color: colors.lightGray,
  },
  value: {
    color: colors.darkBlue,

  },
  smValue: {
    color: colors.darkBlue,

    textAlign: 'left',
    fontSize: scale(11.5),
  },
});
