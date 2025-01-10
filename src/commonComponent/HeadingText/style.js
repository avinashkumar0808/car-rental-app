import {StyleSheet} from 'react-native';

import {colors} from '../../../utils/constants/colors';

export const style = StyleSheet.create({
  heading: {
    fontSize: 24,
    color: colors.darkBlue,
    fontWeight: '600',
  },
  simpleText: {
    fontSize: 15,
    color:colors.lightGray
  },
  simpleTextContainer:{
    alignItems:'center',
    flexDirection:'row',
    
  },
  email:{
color:colors.darkBlue
  }
});
