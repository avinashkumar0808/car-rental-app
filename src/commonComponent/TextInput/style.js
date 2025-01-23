import {StyleSheet} from 'react-native';

import {colors} from '../../../utils/constants/colors';
import { scale } from 'react-native-size-matters';

export const style = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    color: colors.lightGray,
    borderColor: colors.lightGray,
    marginTop: scale(10),
    paddingRight: 45,
    overflow:'hidden',
    borderRadius: scale(8),
    height:50,
    paddingLeft:15
    
  },
  textArea:{
    borderWidth: 1,
    color: colors.lightGray,
    borderColor: colors.lightGray,
    marginTop: 10,
    paddingRight: 45,
    overflow:'hidden',
    borderRadius: scale(8),
    height:120,
    paddingLeft:15,
  
    
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
    right: 10,
    top: '50%',
    transform:[
      
      {translateY:'-30%'}
    ]
  },
});
