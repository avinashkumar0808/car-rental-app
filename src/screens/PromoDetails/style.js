import {Dimensions, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../../utils/constants/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: scale(250),
    width: '100%',
    position: 'relative',
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  headingText: {
    paddingVertical: scale(15),
    color: colors.darkBlue,
    fontSize: 20,
    fontWeight: '700',
    paddingLeft:15,
    textAlign: 'left',
  },
  promoCodeContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: scale(Dimensions.get('screen')),
    marginHorizontal: scale(15),
    paddingHorizontal: scale(15),
    borderColor: colors.lightGray,
    borderWidth: scale(1),
    marginVertical: scale(15),
    paddingVertical: scale(10),
    borderRadius: scale(15),
  },
  promoHeading: {
    color: colors.lightGray,
    fontSize: scale(12),
  },
  promoCodeText: {
    color: colors.darkBlue,
    fontSize: scale(17),
    fontWeight: 700,
  },
  copyButton: {
    backgroundColor: colors.darkBlue,
    paddingVertical: scale(13),
    paddingHorizontal: scale(18),
    borderRadius: scale(15),
  },
  copied:{
    backgroundColor: colors.green,
    paddingVertical: scale(13),
    paddingHorizontal: scale(18),
    borderRadius: scale(15),
  },
  copyButtonText: {
    color: '#fff',
  },
  detailsContainer:{
    width:'100%',
    paddingHorizontal:scale(15),
  },
  detailText:{
color:colors.grey,
  }, 
  termsAndContionsHeading:{
    marginVertical:scale(15),
    fontSize:scale(18),
    fontWeight:700,
    color:colors.darkBlue
  },
  termsAndConditions:{
    fontSize:scale(12),
    color:colors.grey
  }
});
