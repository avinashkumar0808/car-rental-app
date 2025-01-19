import {ScrollView, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

import {style} from './style';
import CustomText from '../../commonComponent/CutstomText';
import SubmitButton from '../../commonComponent/FormSubmitButton';
import {Screen_Routes} from '../../../utils/constants/Routes';

export default function FinalCheckout() {
  const navigation = useNavigation();
  return (
    <ScrollView style={style.container}>
      <CustomText style={style.headingText}>Checkout</CustomText>
      <View style={style.innerContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/suv-car-concept-illustration_114360-13226.jpg?t=st=1736939476~exp=1736943076~hmac=803f02ac6f36d2e6acdf49d87ce26b8227142404aa0b5ea62ad158fd369ecad1&w=1800',
          }}
          style={style.image}
        />
        <CustomText style={style.smallHeading}>Your booking success</CustomText>
        <CustomText style={style.simpleText}>
          Congratulation your booking has been made.
        </CustomText>
        <CustomText style={style.simpleText}>
          Thanks for trusting us!
        </CustomText>
      </View>
      <SubmitButton
        text={'Back to homepage'}
        onPress={() => navigation.dispatch(StackActions.popTo(Screen_Routes.HomeNavigator))}
      />
    </ScrollView>
  );
}
