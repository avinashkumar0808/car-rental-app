/* eslint-disable react/react-in-jsx-scope */
import {Text, View, Pressable, ScrollView, Alert} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useRef, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

import {style} from './style';
import HeadingText from '../../commonComponent/HeadingText';
import Input from '../../commonComponent/TextInput';
import SubmitButton from '../../commonComponent/FormSubmitButton';
import Devider from '../../Divider';
import {googleIcon, facebookIcon} from '../../../utils/constants/icons';
import {isValidEmail} from '../../../utils/validation/inputValidation';

export default function Register({navigation}) {
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
      return auth().signInWithCredential(googleCredential, 'are the data');
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

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const parent = useRef([ref1, ref2, ref3]);

  async function handleSubmit() {
    if (isValidEmail(email)) {
      setIsLoading(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          fireBaseOperation(name, email, userCredential?.user?.uid);
          console.log('User account created & signed in!');
          setIsLoading(false);
          navigation.navigate('Verify', {email});
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert(
              'Email exist ',
              'There is already an account on this email',
              [{text: 'ok'}],
            );
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('Invalid Email', 'Not a valid email', [{text: 'ok'}]);
          }

          console.log(error);
          setIsLoading(false);
        });
    } else {
      Alert.alert('Error', 'Kindly enter the email', [{text: 'OK'}]);
    }
  }

  return (
    <ScrollView style={style.container}>
      <HeadingText
        headingText={'Nice to know you!😉 '}
        simpleText={`It's your first time to use pikbil.`}
      />
      <View>
        <Input
          label={'Full name'}
          placeholder={'Your full name'}
          returnKeyType={'next'}
          ref={parent}
          refIndex={0}
          changeFun={setName}
        />
        <Input
          label={'Email address'}
          placeholder={'Your email address'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          ref={parent}
          refIndex={1}
          autoCapitalize="none"
          changeFun={setEmail}
        />
        <Input
          password
          label={'Password'}
          placeholder={`Your password`}
          returnKeyType={'done'}
          ref={parent}
          refIndex={2}
          changeFun={setPassword}
        />
        <SubmitButton
          text={isLoading ? 'Loading...' : 'Register'}
          onPress={handleSubmit}
        />
      </View>
      <Devider text={'or register with'} />
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
                    userCredential.user.email,
                    userCredential.user.displayName,
                    userCredential.user.uid,
                  ),
                )
                .catch(error => console.log(error))
            }
          />
        </View>
        <View style={style.icon}>
          <SvgXml
            xml={facebookIcon}
            height={40}
            width={25}
            onPress={() =>
              onFacebookButtonPress()
                .then(userCredential =>
                  fireBaseOperation(
                    userCredential.user.email,
                    userCredential.user.displayName,
                    userCredential.user.uid,
                  ),
                )

                .catch(error => console.log(error))
            }
          />
        </View>
      </View>
      <View style={style.loginFooter}>
        <Text style={style.loginFooterText}>
          Already have a pikbil account?{' '}
        </Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={style.footerPressableButtonText}>Login</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
