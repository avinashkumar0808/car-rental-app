import {View} from 'react-native';
import CustomText from '../../../../commonComponent/CutstomText';
import {style} from './style';

export default function AddCarHeader({step}) {
  return (
    <View style={style.container}>
      <CustomText style={style.heading}>Add car</CustomText>
      <CustomText style={style.simpleText}>STEP {step} OF 4</CustomText>
    </View>
  );
}
