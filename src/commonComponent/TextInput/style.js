import {StyleSheet} from 'react-native';

import {colors} from '../../../utils/constants/colors';

export const style = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    color: colors.lightGray,
    borderColor: colors.lightGray,
    marginTop: 10,
    paddingLeft: 20,
    borderRadius: 15,
  },
  text: {
    fontWeight: '700',
    color: colors.darkBlue,
    fontSize: 15,
  },
  inputContainer: {
    position: 'relative',
  },
  eye: {
    position: 'absolute',
    right: 0,
    top: 25,
  },
});
