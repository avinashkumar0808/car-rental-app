import { ScrollView } from "react-native-gesture-handler";
import { useRef } from "react";

import { style } from "./style";
import HeadingText from "../../commonComponent/HeadingText";
import Input from "../../commonComponent/TextInput";
import SubmitButton from "../../commonComponent/FormSubmitButton";

export default function ForgetPassword(){
  const currentRef = useRef();
  const parentRef = useRef([currentRef]);
  return <ScrollView style={style.container}>
<HeadingText headingText={'Forgot Password? 🔒'} simpleText={'Please input your email to recover your pikbil account.'}/>
<Input label={'Email address'} placeholder={'Your email address' } refIndex={0} ref={parentRef}  keyboardType={'email-address'} autoCapitalize={'none'}/>
<SubmitButton text={'Recover account'}/>
  </ScrollView>
}