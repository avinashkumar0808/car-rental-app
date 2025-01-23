import {ScrollView, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

import {style} from './style';
import CustomText from '../../commonComponent/CutstomText';
import SubmitButton from '../../commonComponent/FormSubmitButton';
import {Screen_Routes} from '../../../utils/constants/Routes';

export default function FinalAddCar() {
  const navigation = useNavigation();
  return (
    <ScrollView style={style.container}>
      <CustomText style={style.headingText}>Add car</CustomText>
      <View style={style.innerContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/add-notes-concept-illustration_114360-2496.jpg?t=st=1737548524~exp=1737552124~hmac=bd90aada319f6e8b388c914fe7dc7fb773326ed247dcc38e17fcf050dc29bae7&w=1060',
          }}
          style={style.image}
        />
        <CustomText style={style.smallHeading}>Your add car document has been submitted!</CustomText>
        <CustomText style={style.simpleText}>
          We'll review your car and get back to you as soon as possible. Stay tune for it.
        </CustomText>
        
      </View>
      <SubmitButton
        text={'Back to homepage'}
        onPress={() => navigation.dispatch(StackActions.popTo(Screen_Routes.HomeNavigator))}
      />
    </ScrollView>
  );
}
