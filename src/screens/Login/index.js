import {Pressable, Text, View, ScrollView} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

import Header from '../../commonComponent/Header';
import {style} from './style';
import HeadingText from '../../commonComponent/HeadingText';
import Input from '../../commonComponent/TextInput';
import SubmitButton from '../../commonComponent/FormSubmitButton';
import Devider from '../../Divider';
import {facebookIcon, googleIcon} from '../../../utils/constants/icons';

export default function Login() {
  const navigation = useNavigation();
  return (
    <ScrollView style={style.container}>
      <HeadingText
        headingText={`Welcome to, PikBil👌`}
        simpleText={`Enter your Pikbil account to continue.`}
      />
      <View>
        <Input label={'Email address'} placeholder={'Your email address'} />
        <Input label={'Password'} placeholder={'Your password'} password />
        <SubmitButton text={'Login'} />
      </View>
      <Pressable style={style.pressable}>
        <Text style={style.buttonText}>Forgot password?</Text>
      </Pressable>
      <Devider text={'or login with'} />
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
          Didn't have a pikbil account?{' '}
        </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={style.footerPressableButtonText}>Register</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
