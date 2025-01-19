import {View} from 'react-native';
import CustomText from '../CutstomText';
import {style} from './style';

export default function ListKeyValue({keyValue, value, sm}) {
  return (
    <View style={style.container}>
      <CustomText style={style.key}>{keyValue}</CustomText>
      <CustomText style={sm ? style.smValue : style.value}>{value}</CustomText>
    </View>
  );
}
