import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {topCarData} from '../../../utils/constants/dummyData/topCarsData';
import {style} from './style';
import {Screen_Routes} from '../../../utils/constants/Routes';
import {useEffect, useState} from 'react';

export default function TopCar({data, full, parentId, review}) {
  const navigation = useNavigation();

  const rev = review.filter(data => data.id === parentId);

  return (
    <Pressable
      style={full ? style.fullContainer : style.container}
      onPress={() =>
        navigation.navigate(Screen_Routes.CarDetails, {
          data: {data, parentId, rev},
        })
      }>
      <Image
        source={{uri: data?.frontImageURL}}
        height={190}
        width={300}
        style={full ? style.fullImage : style.image}
      />
      <View style={full && style.textContainerFull}>
        <Text style={style.headingText}>{data?.carName}</Text>
        <View style={style.textContainer}>
          <Text style={style.simpleText}>
            ⭐️{' '}
            {rev.length <= 0
              ? 0
              : rev.reduce((acc, val) => acc + val.rating, 0) / rev.length}
          </Text>
          <Text
            style={{
              ...style.simpleText,
              ...style.simpleTextWithSpecialColor,
            }}>{`(${rev.length} review)`}</Text>
        </View>
      </View>
      <Text style={style.currencyText}>£{data?.fare}.00 / day</Text>
    </Pressable>
  );
}
