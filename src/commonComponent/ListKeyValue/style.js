import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../../../utils/constants/colors';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'top',
    width: '100%',
    marginVertical: scale(3),
    gap: scale(15),
  },
  key: {
    color: colors.lightGray,
  },
  value: {
    color: colors.darkBlue,

    paddingHorizontal: scale(5),
  },
  smValue: {
    color: colors.darkBlue,
    width: '70%',
    textAlign: 'left',
    fontSize: scale(11.5),
  },
});
