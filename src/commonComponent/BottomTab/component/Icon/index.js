import {SvgXml} from 'react-native-svg';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  activeCar,
  activeChatIcon,
  activeHome,
  activeProfileIcon,
  addIcon,
  carIcon,
  chatIcon,
  home,
  profileIcon,
} from '../../../../../utils/constants/icons';
import {Screen_Routes} from '../../../../../utils/constants/Routes';

const height = 35;
const width = 35;
export default function Icon({name, style}) {
  const navigation = useNavigation();
  const route = useRoute();

  if (name === 'home') {
    if (route.name === Screen_Routes.Home) {
      return (
        <SvgXml xml={activeHome} height={height} width={width} stroke={1} />
      );
    }
    return (
      <SvgXml
        xml={home}
        height={height}
        width={width}
        onPress={() => navigation.navigate(Screen_Routes.Home)}
        stroke={1}
      />
    );
  } else if (name === 'car') {
    if (route.name === Screen_Routes.Car) {
      return (
        <SvgXml xml={activeCar} height={height} width={width} stroke={1} />
      );
    }
    return (
      <SvgXml
        xml={carIcon}
        height={height}
        width={width}
        onPress={() => navigation.navigate(Screen_Routes.Car)}
        stroke={1}
      />
    );
  } else if (name === 'add') {
    if (route.name === Screen_Routes.Add) {
      return <SvgXml xml={addIcon} height={65} width={65} style={style} />;
    }
    return (
      <SvgXml
        xml={addIcon}
        height={65}
        width={65}
        onPress={() => navigation.navigate(Screen_Routes.Add)}
        stroke={1}
        style={style}
      />
    );
  } else if (name === 'chat') {
    if (route.name === Screen_Routes.Chat) {
      return <SvgXml xml={activeChatIcon} height={height} width={width} />;
    }
    return (
      <SvgXml
        xml={chatIcon}
        height={height}
        width={width}
        onPress={() => navigation.navigate(Screen_Routes.Chat)}
      />
    );
  } else if (name === 'profile') {
    if (route.name === Screen_Routes.Profile) {
      return <SvgXml xml={activeProfileIcon} height={height} width={width} />;
    }
    return (
      <SvgXml
        xml={profileIcon}
        height={height}
        width={width}
        onPress={() => navigation.navigate(Screen_Routes.Profile)}
      />
    );
  }
}
