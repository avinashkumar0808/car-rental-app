/* eslint-disable react/react-in-jsx-scope */
import {Text, View, Pressable, ScrollView} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useState} from 'react';

import {style} from './style';
import HeadingText from '../../commonComponent/HeadingText';
import Input from '../../commonComponent/TextInput';
import SubmitButton from '../../commonComponent/FormSubmitButton';
import Devider from '../../Divider';
import {googleIcon, facebookIcon} from '../../../utils/constants/icons';
import {isValidEmail} from '../../../utils/validation/inputValidation';


export default function Register({navigation}) {
 
  const [email, setEmail] = useState('');
  function handleSubmit(){
    if(isValidEmail(email)){
      console.log('working')
    navigation.navigate('Verify', {email});
    }
  }
  function handleInputChange(newText){
   setEmail(newText)
  }
  return (
    <ScrollView style={style.container} >
      <HeadingText
        headingText={'Nice to know you!😉 '}
        simpleText={`It's your first time to use pikbil.`}
      />
      <View>
        <Input label={'Full name'} placeholder={'Your full name'} />
        <Input
          label={'Email address'}
          placeholder={'Your email address'}
          
          onChange={handleInputChange}
          
        />
        <Input password label={'Password'} placeholder={`Your password`} />
        <SubmitButton text={'Register'} onPress={handleSubmit} />
      </View>
      <Devider text={'Register'} />
      <View style={style.iconContainer}>
        <View style={style.icon}>
          <SvgXml xml={googleIcon} height={40} width={25} />
        </View>
        <View style={style.icon}>
          <SvgXml xml={facebookIcon} height={40} width={25} />
        </View>
      </View>
      <View style={style.loginFooter}>
        <Text style={style.loginFooterText}>
          Already have a pikbil account?{' '}
        </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={style.footerPressableButtonText}>Login</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
