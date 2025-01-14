import {StyleSheet, Text} from 'react-native';
import {
  poppinsBold,
  poppinsExtraBold,
  poppinsRegular,
} from '../../../utils/constants/fontFamily';

export default function CustomText({children, type, style}) {
  let fontFamily = poppinsRegular;
  if (type === 'bold') {
    fontFamily = poppinsBold;
  } else if (type === 'extraBold') {
    fontFamily = poppinsExtraBold;
  }

  return <Text style={{...style, fontFamily}}>{children}</Text>;
}
