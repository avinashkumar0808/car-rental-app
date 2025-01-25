import {Pressable} from 'react-native';
import CustomText from '../CutstomText';
import {style} from './style';
import {useCallback} from 'react';

export default function CapsuleButton({text, active, onPress, setActive}) {
  const handlePress = useCallback(() => {
    setActive(text);
    onPress(text);
  }, [setActive, onPress, text]);
  return (
    <Pressable
      style={active ? style.activeButton : style.Button}
      onPress={handlePress}>
      <CustomText style={active ? style.activeText : style.text}>
        {text}
      </CustomText>
    </Pressable>
  );
}
