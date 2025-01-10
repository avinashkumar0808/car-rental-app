import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

import { leftIcon } from '../../../utils/constants/icons';
import { style } from './style';

export default function Header(){
  const navigation = useNavigation();
function handleClick(){
  navigation.goBack();
}
  return  <View style={style.header}>
    <SvgXml xml={leftIcon} height={40} width={40} strokeWidth={2} onPress={handleClick}/>
  </View>


}