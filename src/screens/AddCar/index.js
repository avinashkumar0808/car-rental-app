import {Alert, ScrollView, Text, View} from 'react-native';
import {useState, useRef} from 'react';
import { Dropdown } from 'react-native-element-dropdown';


import Header from '../../commonComponent/Header';
import {style} from './style';
import AddCarHeader from './components/AddCarHeader';
import Input from '../../commonComponent/TextInput';
import SubmitButton from '../../commonComponent/FormSubmitButton';
import {Screen_Routes} from '../../../utils/constants/Routes';

export default function AddCar({navigation, route}) {
  const [address, setAddress] = useState('');
  const [dealerName, setDealerName] = useState('');
  const [postCode, setPostCode] = useState('');

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  function handleContinueClick() {
    if (
      address.trim() !== '' &&
      dealerName.trim() !== '' &&
      postCode.trim() !== ''
    ) {
      navigation.navigate(Screen_Routes.AddCarScreen2, {
        car: {dealerName, address, postCode},
      });
    } else {
      Alert.alert(
        'Empty fields',
        'Text Fields must not be emply or must not contain only spaces!',
        [{text: 'OK'}],
      );
    }
  }

  const parent = useRef([ref1, ref2, ref3]);
  return (
    <ScrollView style={style.container} keyboardShouldPersistTaps={'handled'}>

      <AddCarHeader step={1} />
      <View style={style.inputContainer}>
        <Input
          label={'Your dealer name'}
          placeholder={'Your dealer name'}
          returnKeyType={'next'}
          ref={parent}
          refIndex={0}
          changeFun={setDealerName}
        />
        <Input
          label={'Your address line'}
          placeholder={'Your address line'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          ref={parent}
          refIndex={1}
          autoCapitalize="none"
          changeFun={setAddress}
          textArea
        />
        <Input
          label={'Your post code'}
          placeholder={`Your address line`}
          returnKeyType={'done'}
          ref={parent}
          refIndex={2}
          changeFun={setPostCode}
        />
        
        <View style={style.buttonContainer}>
          <SubmitButton text={'Continue'} onPress={handleContinueClick} />
        </View>
      </View>
    </ScrollView>
  );
}
