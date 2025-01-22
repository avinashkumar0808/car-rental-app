import {SvgXml} from 'react-native-svg';
import {crossIconWhite} from '../../../../../../../utils/constants/icons';
import {Image, View, ImageBackground, Pressable} from 'react-native';

import {style} from './style';
import LinearGradient from 'react-native-linear-gradient';

export default function ImageShow({image, fun, styleVal, styleValInner}) {
  return (
    <ImageBackground
      source={{uri: image}}
      style={styleVal ? styleVal : style.container}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.3)']}
        style={styleValInner ? styleValInner : style.innerContainer}>
        <Pressable style={style.closeIconContainer} onPress={fun}>
          <SvgXml xml={crossIconWhite} height={24} width={24} />
        </Pressable>
      </LinearGradient>
    </ImageBackground>
  );
}
