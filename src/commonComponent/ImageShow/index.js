import {SvgXml} from 'react-native-svg';
import {ImageBackground, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {crossIconWhite} from '../../../utils/constants/icons';
import {style} from './style';

export default function ImageShow({image, fun, styleVal, styleValInner,iconStyle}) {
  return (
    <ImageBackground 
      source={{uri: image}}
      style={styleVal ? styleVal : style.container}>
      <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0.02)',
          'rgba(0, 0, 0, 0.016),rgba(0, 0, 0, 0.012),rgba(0, 0, 0, 0.01),rgba(0, 0, 0, 0.005),rgba(0, 0, 0, 0)',
        ]}
        style={styleValInner ? styleValInner : style.innerContainer}>
        <Pressable style={iconStyle?iconStyle:style.closeIconContainer} onPress={fun}>
          <SvgXml xml={crossIconWhite} height={24} width={24} />
        </Pressable>
      </LinearGradient>
    </ImageBackground>
  );
}
