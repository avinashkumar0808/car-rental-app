import {Alert, View} from 'react-native';
import { useState } from 'react';

import CustomText from '../../../../commonComponent/CutstomText';
import {SvgXml} from 'react-native-svg';
import {crossIcon} from '../../../../../utils/constants/icons';
import {TextInput} from 'react-native-gesture-handler';
import SubmitButton from '../../../../commonComponent/FormSubmitButton';
import {style} from './style';
import {colors} from '../../../../../utils/constants/colors';
import { discountCodes } from '../../../../../utils/constants/dummyData/discountCode';

function checkCode(code){
  let i = 0;
  for(i = 0; i< discountCodes.length; i++){
    if(discountCodes[i].discountCode === code){
      return discountCodes[i].value;
    }
  }
  return false;
}

export default function Modal({
  setIsBackDropOpen,
handleCancel

}) {
const [inputText, setInputText] = useState('');


  return (
    <View style={style.container}>
      <View style={style.secondContainer}>
        <View style={style.headingContainer}>
          <CustomText style={style.textStyle}>Cancel Booking</CustomText>
          <SvgXml
            xml={crossIcon}
            height={40}
            width={40}
            onPress={() => setIsBackDropOpen(null)}
          />
        </View>
      <CustomText style={style.simpleText}>Are you sure want to cancel your booking? If you cancel booking will charge 50% of trip price.</CustomText>
        <SubmitButton text={'Cancle booking'} onPress={()=>{
          handleCancel();
          setIsBackDropOpen(null);
        }} />
      </View>
    </View>
  );
}
