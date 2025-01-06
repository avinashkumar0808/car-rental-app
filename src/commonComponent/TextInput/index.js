import {View, TextInput, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {style} from './style';
import {colors} from '../../../utils/constants/colors';
import {eye} from '../../../utils/constants/icons';
import {useState} from 'react';

export default function Input({label, placeholder, password, onChange, value}) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={style.container}>
      <Text style={style.text}>{label}</Text>
      <View>
        <TextInput
          placeholder={placeholder}
          style={style.input}
          placeholderTextColor={colors.lightGray}
          secureTextEntry={!visible && password}
          onChangeText={onChange}
          
        />
        {password && (
          <SvgXml
            xml={eye}
            height={20}
            width={40}
            style={style.eye}
            onPress={() => setVisible(prev => !prev)}
          />
        )}
      </View>
    </View>
  );
}
