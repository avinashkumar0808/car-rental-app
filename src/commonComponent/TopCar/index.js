import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {topCarData} from '../../../utils/constants/dummyData/topCarsData';
import {style} from './style';
import {Screen_Routes} from '../../../utils/constants/Routes';

export default function TopCar({data, full}) {
  const navigation = useNavigation();
  console.log(data)
  return (
    <Pressable
      style={full ? style.fullContainer : style.container}
      onPress={() => navigation.navigate(Screen_Routes.CarDetails, {data})}>
      <Image
        source={{uri: data?.frontImageURL}}
        height={190}
        width={300}
        style={full?style.fullImage:style.image}
      />
      <View style={full && style.textContainerFull }>
      <Text style={style.headingText}>{data?.carName}</Text>
      <View style={style.textContainer}>
        <Text style={style.simpleText}>⭐️ {0}</Text>
        <Text
          style={{
            ...style.simpleText,
            ...style.simpleTextWithSpecialColor,
          }}>{`(${0} review)`}</Text>
      </View>
      </View>
      <Text style={style.currencyText}>£{data?.fare}.00 / day</Text>
    </Pressable>
  );
}
