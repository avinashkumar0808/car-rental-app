import {View, Image} from 'react-native';

import {style} from './style';
import CustomText from '../../../../commonComponent/CutstomText';
import SubmitButton from '../../../../commonComponent/FormSubmitButton';
import {useNavigation} from '@react-navigation/native';
import {Screen_Routes} from '../../../../../utils/constants/Routes';

export default function NoElementUI() {
  const navigation = useNavigation();
  return (
    <>
      <View style={style.innerContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/suv-car-concept-illustration_114360-13226.jpg?t=st=1736939476~exp=1736943076~hmac=803f02ac6f36d2e6acdf49d87ce26b8227142404aa0b5ea62ad158fd369ecad1&w=1800',
          }}
          style={style.image}
        />
        <CustomText style={style.smallHeading}>
          Your don't have trip yet
        </CustomText>
        <CustomText style={style.simpleText}>
          Seems like you never never rent in Pikbil. Try Rent some car in your
          account
        </CustomText>
        <CustomText style={style.simpleText}>
          Thanks for trusting us!
        </CustomText>
      </View>
      <SubmitButton
        text={'Find a car'}
        onPress={() => navigation.navigate(Screen_Routes.MoreCars)}
      />
    </>
  );
}
