import {Dimensions, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../../../../utils/constants/colors';

export const style = StyleSheet.create({
  container: {

    width: scale(Dimensions.get('screen').width),
    backgroundColor: colors.white,
    paddingHorizontal: scale(15),
    paddingVertical: scale(15),
  },
  largeNameText: {
    fontSize: scale(19),
    fontWeight: 700,
    color: colors.darkBlue,
    marginVertical: scale(15),
  },
  aboutText: {
    color: colors.lightGray,
    marginRight: scale(15),
    fontSize: 14,
    width: '90%',
  },
  carDetailHeadingText: {
    color: colors.darkBlue,
    fontWeight: 600,
    marginVertical: scale(15),
  },
  hostDetailHeading: {
    paddingVertical: scale(15),
    color: colors.darkBlue,
    fontWeight: 600,
  },
  reviewHeading:{
    paddingBottom: scale(15),
    color: colors.darkBlue,
    fontWeight: 600,

  }, 
  previewText:{
    textAlign:'center',
    width:'90%',
    color:colors.bluePink,

  },
  keyValueContainer:{
width:'80%',

  }
  
});
