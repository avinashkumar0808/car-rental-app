import {View} from 'react-native';
import {style} from './style';
import Icon from './component/Icon';

export default function BottomTab() {
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <Icon name={'home'} />
        <Icon name={'trip'} />
      </View>
      <Icon name={'add'} style={style.iconStyle} />
      <View style={style.innerContainer}>
        <Icon name={'chat'} />
        <Icon name={'profile'} />
      </View>
    </View>
  );
}
