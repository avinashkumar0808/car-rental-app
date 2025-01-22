import {Alert, ScrollView, View} from 'react-native';
import {useState, useRef} from 'react';

import Input from '../../../../commonComponent/TextInput';
import {style} from '../../style';
import SubmitButton from '../../../../commonComponent/FormSubmitButton';
import Header from '../../../../commonComponent/Header';
import AddCarHeader from '../../components/AddCarHeader';
import DropdownComponent from '../../../../commonComponent/DropDown';
import {FuelData} from '../../../../../utils/constants/Fuels';
import {Screen_Routes} from '../../../../../utils/constants/Routes';

export default function AddCarScreen3({navigation, route}) {
  const [kilometers, setKilometers] = useState('');
  const [seats, setSeats] = useState('');
  const [transmission, setTransmission] = useState('');
  const [fuelType, setFuelType] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  function handleContinuePress() {
    if (
      fuelType !== null &&
      seats.trim() !== '' &&
      +seats &&
      transmission.trim() !== '' &&
      kilometers.trim() !== '' &&
      +kilometers
    ) {
      navigation.navigate(Screen_Routes.AddCarScreen4, {
        car: {...route.params.car, fuelType, kilometers, transmission, seats},
      });
    }
    else{
      Alert.alert('Invlid Input','Input is either empty or invlid',[
        {text:'OK'}
      ])
    }
  }

  const parent = useRef([ref1, ref2, ref3]);
  return (
    <>
      <ScrollView style={style.container} keyboardShouldPersistTaps='handled' keyboardDismissMode='none'>

        <AddCarHeader step={3} />
        <View style={style.inputContainer}>
          <DropdownComponent
            isFocus={isFocus}
            setIsFocus={setIsFocus}
            value={fuelType}
            setValue={setFuelType}
            data={FuelData}
            label={'Fuel'}
          />
          <Input
            label={'Kilometers'}
            placeholder={'Your Kilometers'}
            returnKeyType={'next'}
            ref={parent}
            refIndex={0}
            changeFun={setKilometers}
            keyboardType={'numeric'}
          />

          <Input
            label={'Seats'}
            placeholder={'Your Seats'}
            returnKeyType={'next'}
            ref={parent}
            refIndex={1}
            autoCapitalize="none"
            changeFun={setSeats}
            keyboardType={'numeric'}
          />
          <Input
            label={'Transmission'}
            placeholder={`Your car name`}
            returnKeyType={'done'}
            ref={parent}
            refIndex={2}
            changeFun={setTransmission}
          />
          <View style={style.buttonContainer}>
            <SubmitButton text={'Continue'} onPress={handleContinuePress}/>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
