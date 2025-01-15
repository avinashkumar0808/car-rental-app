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
  setDiscountCodeText,
  setTotal,
}) {
const [inputText, setInputText] = useState('');
function handleRedeemButtonClick(){
  const result = checkCode(inputText);
  if(result){
setTotal(prev=>prev-prev*result);
setDiscountCodeText(()=>inputText);
setIsBackDropOpen(()=>false);
  }
  else{
    Alert.alert('Not valid Code','Entered discount Code is not valid',[{text:"OK"}])
  }
}

  return (
    <View style={style.container}>
      <View style={style.secondContainer}>
        <View style={style.headingContainer}>
          <CustomText style={style.textStyle}>Discount</CustomText>
          <SvgXml
            xml={crossIcon}
            height={40}
            width={40}
            onPress={() => setIsBackDropOpen(false)}
          />
        </View>
        <TextInput
          placeholder="Input your discount code here"
          style={style.inputStyle}
          placeholderTextColor={colors.grey}
  
          onChangeText={(newText)=>setInputText(newText)}
        />
        <SubmitButton text={'Redeem'} onPress={handleRedeemButtonClick} />
      </View>
    </View>
  );
}
