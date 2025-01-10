import {SafeAreaView, Text, View, StyleSheet, Pressable} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';

import {style} from './style';
import HeadingText from '../../commonComponent/HeadingText';
import {colors} from '../../../utils/constants/colors';
import SubmitButton from '../../commonComponent/FormSubmitButton';
import {useEffect, useRef, useState} from 'react';

export default function OTPVerify({route}) {
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [time, setTime] = useState(30);
  const interval = useRef();

  useEffect(() => {
    if (isTimerActive) {
      interval.current = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);

      if (time === 0) {
        setIsTimerActive(false);
        clearInterval(interval.current);
      }
    }
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [time, isTimerActive]);
  return (
    <SafeAreaView style={style.container}>
      <HeadingText
        headingText={`Check your email📭`}
        simpleText={`We already sent you 4 digit OTP to your `}
        metadata={route.params.email}
      />
      <View style={style.otpContainer}>
        <OtpInput
          numberOfDigits={4}
          focusColor={colors.darkBlue}
          autoFocus={true}
          theme={{
            pinCodeContainerStyle:style.pinCodeContainer,
            containerStyle:style.otpContainer,
            pinCodeTextStyle:style.pinCodeText,
            
          }}
        />
      </View>
      {isTimerActive ? (
        <Text style={style.timer}>00:{time < 10 ? `0${time}` : time}</Text>
      ) : (
        <Pressable style={style.footer}>
          <Text style={style.text}>Didn't received OTP number?</Text>
          <Text style={style.link} onPress={()=>{
            setTime(30)
            setIsTimerActive(true)
          }}>Resend</Text>
        </Pressable>
      )}
      <SubmitButton text={'Continue'} />
    </SafeAreaView>
  );
}
