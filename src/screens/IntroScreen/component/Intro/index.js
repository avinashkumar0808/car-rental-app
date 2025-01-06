import {Image, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {style} from './IntroStyle';
import {introData} from '../../../../../utils/constants/dummyData/introData';
import {useEffect} from 'react';

export default function Intro({image, heading, textContent}) {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={style.image}
        />
      </View>
      <View style={style.textContainer}>
        <Text style={style.headingText}>{heading}</Text>
        <Text style={style.textParagraph}>{textContent}</Text>
      </View>
    </View>
  );
}
