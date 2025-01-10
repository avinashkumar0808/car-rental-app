import {Pressable, Text, View, ScrollView, Alert} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import firestore from '@react-native-firebase/firestore';

import Header from '../../commonComponent/Header';
import {style} from './style';
import HeadingText from '../../commonComponent/HeadingText';
import Input from '../../commonComponent/TextInput';
import SubmitButton from '../../commonComponent/FormSubmitButton';
import Devider from '../../Divider';
import {facebookIcon, googleIcon} from '../../../utils/constants/icons';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '95899567945-8hn11oreh94vbola5kv4ksd4lkm1sv5i.apps.googleusercontent.com',
    });
    // GoogleSignin.configure({
    //   webClientId:'95899567945-8hn11oreh94vbola5kv4ksd4lkm1sv5i.apps.googleusercontent.com',
    //   offlineAccess: true,
    //   forceCodeForRefreshToken: true,
    //   scopes: ['profile', 'email']

    // });
  }, []);

  async function handleLogin() {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('success');
        setLoading(false);
      })
      .catch(error => {
        Alert.alert('Unable to Signin', 'Something went wrong', [{text: 'ok'}]);
        setLoading(false);
      });
  }
  const currRef = useRef();
  const nextRef = useRef();
  const parentRef = useRef([currRef, nextRef]);

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      const res = await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      console.log('res', res);

      // Get the users ID token
      let signInResult = await GoogleSignin.signIn();
      let idToken = signInResult.data?.idToken;

      // Try the new style of google-sign in result, from v13+ of that module
      //  let  idToken = signInResult.data?.idToken;
      if (!idToken) {
        //   // if you are using older versions of google-signin, try old style result
        idToken = signInResult.idToken;
      }
      if (!idToken) {
        throw new Error('No ID token found');
      }

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('error40', error);
    }
  }

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  async function fireBaseOperation(name, email, uid) {
    if (!uid) {
      await firestore().collection('carRental').add({name, email});
    } else {
      await firestore().collection('carRental').add({name, email, uid});
    }
  }

  return (
    <ScrollView style={style.container}>
      <HeadingText
        headingText={`Welcome to, PikBil👌`}
        simpleText={`Enter your Pikbil account to continue.`}
      />
      <View>
        <Input
          label={'Email address'}
          placeholder={'Your email address'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          ref={parentRef}
          refIndex={0}
          autoCapitalize="none"
          changeFun={setEmail}
        />
        <Input
          label={'Password'}
          placeholder={'Your password'}
          password
          returnKeyType={'done'}
          ref={parentRef}
          refIndex={1}
          changeFun={setPassword}
        />
        <SubmitButton
          text={loading ? 'Submitting...' : 'Login'}
          onPress={handleLogin}
        />
      </View>
      <Pressable
        style={style.pressable}
        onPress={() => navigation.navigate('ForgetPassword')}>
        <Text style={style.buttonText}>Forgot password?</Text>
      </Pressable>
      <Devider text={'or login with'} />
      <View style={style.iconContainer}>
        <View style={style.icon}>
          <SvgXml
            xml={googleIcon}
            height={40}
            width={25}
            onPress={() =>
              onGoogleButtonPress()
                .then(userCredential =>
                  fireBaseOperation(
                    userCredential.user.displayName,
                    userCredential.user.displayName,
                    userCredential.user.uid,
                  ),
                )
                .catch(() => console.log('error'))
            }
          />
        </View>
        <View style={style.icon}>
          <SvgXml
            xml={facebookIcon}
            height={40}
            width={25}
            onPress={() =>
              onFacebookButtonPress().then(userCredential =>
                fireBaseOperation(
                  userCredential.user.displayName,
                  userCredential.user.displayName,
                  userCredential.user.uid,
                ),
              )
            }
          />
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
