import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../../../../utils/constants/colors';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: scale(15),
  },

  carImageContainer: {
    height: scale(150),
    width: '100%',
    position: 'relative',
  },
  linearGradientContainer: {
    height: scale(150),
    width: '100%',
    borderRadius: scale(15),
    paddingHorizontal: scale(15),
  },
  labelTextButton: {
    marginTop: scale(5),
    paddingVertical: scale(5),
    backgroundColor: colors.white,
    width: scale(90),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(15),
  },
  labelText: {
    textAlign: 'center',
  },
  headingText:{
    fontSize:scale(16),
    color:colors.darkBlue,
    marginTop:scale(5),
  },
  simpleText:{
    fontSize:scale(14),
    color:colors.lightGray,
  }
});
