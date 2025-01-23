import {View, TextInput, Text, ScrollView} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {forwardRef} from 'react';

import {style} from './style';
import {colors} from '../../../utils/constants/colors';
import {eye} from '../../../utils/constants/icons';
import {useState} from 'react';
import CustomText from '../CutstomText';

const Input = forwardRef(function Input(
  {
    label,
    placeholder,
    password,
    textArea,
    value,
    keyboardType,
    returnKeyType,
    refIndex,
    changeFun,
    ...props
  },
  ref,
) {
  const [visible, setVisible] = useState(false);
  const currRef = ref.current[refIndex];
  const nextRef = ref.current[refIndex + 1];

  return (
    <ScrollView style={style.container} keyboardShouldPersistTaps={'handled'}>
      <CustomText style={style.text}>{label}</CustomText>
      <View>
        <TextInput
          placeholder={placeholder}
          style={textArea ? style.textArea : style.input}
          placeholderTextColor={colors.lightGray}
          secureTextEntry={!visible && password}
          onChangeText={newText => changeFun(newText)}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          blurOnSubmit={false}
          focusable={true}
          ref={currRef}
          onSubmitEditing={() => {
            if (ref.current.length > refIndex + 1 && nextRef.current) {
              nextRef.current.focus();
            }
          }}
          multiline={textArea}
        textAlignVertical={textArea?'top':'center'}
        
          {...props}
        />
        {password && (
          <SvgXml
            xml={eye}
            height={22}
            width={40}
            style={style.eye}
            onPress={() => setVisible(prev => !prev)}
          />
        )}
      </View>
    </ScrollView>
  );
});
export default Input;
