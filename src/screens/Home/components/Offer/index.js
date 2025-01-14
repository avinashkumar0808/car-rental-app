import {View, Image, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {offerData} from '../../../../../utils/constants/dummyData/OfferData';
import {style} from './style';
import {Screen_Routes} from '../../../../../utils/constants/Routes';

export default function Offer({index}) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={style.container}
      onPress={() => navigation.navigate(Screen_Routes.PromoDetails, {curr:index})}>
      <Image
        source={{uri: offerData[index].image}}
        height={300}
        style={style.image}
      />
      <Text style={style.promoText}>{offerData[index].heading}</Text>
    </Pressable>
  );
}
