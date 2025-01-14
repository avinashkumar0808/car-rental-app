import {StyleSheet} from 'react-native';
import {colors} from '../../../../../../../utils/constants/colors';
import { poppinsExtraBold, poppinsRegular } from '../../../../../../../utils/constants/fontFamily';

export const style = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginHorizontal: 20,
  
  },
  image: {
    borderRadius: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 5,
    color: colors.darkBlue,
fontFamily:poppinsExtraBold

  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    gap: 5,
  },
  currencyText: {
    color: colors.bluePink,
    fontSize: 18,
    marginBottom:15,
    fontFamily:poppinsRegular
    
  },
  simpleText: {
    fontSize: 15,
    fontFamily:poppinsRegular
  },
  simpleTextWithSpecialColor: {
    color: colors.lightGray,
  },
});
