import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {useState, useRef} from 'react';

import Input from '../../../../commonComponent/TextInput';
import {style} from '../../style';
import SubmitButton from '../../../../commonComponent/FormSubmitButton';
import Header from '../../../../commonComponent/Header';
import AddCarHeader from '../../components/AddCarHeader';
import DropdownComponent from '../../../../commonComponent/DropDown';
import { Screen_Routes } from '../../../../../utils/constants/Routes';
import { carBrands } from '../../../../../utils/constants/CarBrands';

export default function AddCarScreen2({navigation, route}) {
  const [carName, setCarName] = useState('');
  const [carDescription, setCarDescription] = useState('');
  const [carColor, setCarColor] = useState('');
  const [carBrand, setCarBrand] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  console.log(route.params);

  const parent = useRef([ref1, ref2, ref3]);
function handleContinueClick(){
 if(carName.trim()!=='' && carDescription.trim()!=='' && carColor.trim()!=='' && carBrand!==null){
  navigation.navigate(Screen_Routes.AddCarScreen3,{car:{...route.params.car,carName,carDescription,carColor,carBrand}})
 }
 else{
  Alert.alert('Input Field is empty','Some of the inputfields are empty.',[{
    text:'OK'
  }])
 }
}

  return (
    <>
      <ScrollView style={style.container} keyboardShouldPersistTaps='handle' keyboardDismissMode='none'>

        <AddCarHeader step={2} />
        <View style={style.inputContainer}>
          <Input
            label={'Car name'}
            placeholder={'Your car name'}
            returnKeyType={'next'}
            ref={parent}
            refIndex={0}
            changeFun={setCarName}
          />

          <DropdownComponent
            isFocus={isFocus}
            setIsFocus={setIsFocus}
            value={carBrand}
            setValue={setCarBrand}
            label={'Car brand'}
            data={carBrands}
          />
          <Input
            label={'Car description'}
            placeholder={'Your car description'}
            returnKeyType={'next'}
            ref={parent}
            refIndex={1}
            autoCapitalize="none"
            changeFun={setCarDescription}
            textArea
          />
          <Input
            label={'Car Color'}
            placeholder={`Your car color`}
            returnKeyType={'done'}
            ref={parent}
            refIndex={2}
            changeFun={setCarColor}
          />
          <View style={style.buttonContainer}>
            <SubmitButton text={'Continue'} onPress={handleContinueClick} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
