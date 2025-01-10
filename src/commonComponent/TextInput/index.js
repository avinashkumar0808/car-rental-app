import {View, TextInput, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {forwardRef} from 'react';

import {style} from './style';
import {colors} from '../../../utils/constants/colors';
import {eye} from '../../../utils/constants/icons';
import {useState} from 'react';

const Input = forwardRef(function Input(
  {
    label,
    placeholder,
    password,

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
    <View style={style.container}>
      <Text style={style.text}>{label}</Text>
      <View>
        <TextInput
          placeholder={placeholder}
          style={style.input}
          placeholderTextColor={colors.lightGray}
          secureTextEntry={!visible && password}
          onChangeText={newText => changeFun(newText)}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          focusable={true}
          ref={currRef}
          onSubmitEditing={() => {
            if (ref.current.length > refIndex + 1 && nextRef.current) {
              nextRef.current.focus();
            }
          }}
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
    </View>
  );
});
export default Input;
