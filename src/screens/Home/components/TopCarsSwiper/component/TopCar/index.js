import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {topCarData} from '../../../../../../../utils/constants/dummyData/topCarsData';
import {style} from './style';
import {Screen_Routes} from '../../../../../../../utils/constants/Routes';

export default function TopCar({data}) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={style.container}
      onPress={() => navigation.navigate(Screen_Routes.CarDetails, {data})}>
      <Image
        source={{uri: data.image}}
        height={190}
        width={300}
        style={style.image}
      />
      <Text style={style.headingText}>{data.name}</Text>
      <View style={style.textContainer}>
        <Text style={style.simpleText}>⭐️ {data.ratings}</Text>
        <Text
          style={{
            ...style.simpleText,
            ...style.simpleTextWithSpecialColor,
          }}>{`(${data.reviews} review)`}</Text>
      </View>
      <Text style={style.currencyText}>£{data.fare}.00 / day</Text>
    </Pressable>
  );
}
