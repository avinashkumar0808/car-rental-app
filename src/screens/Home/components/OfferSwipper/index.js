import {useState} from 'react';
import Swiper from 'react-native-swiper';
import {View} from 'react-native';

import {style} from './style';
import Offer from '../Offer';
import {offerData} from '../../../../../utils/constants/dummyData/OfferData';

export default function OfferSwipper() {
  const [activeIndexTab, setActiveIndexTab] = useState(0);
  return (
    <>
      <Swiper
        loop={false}
        onIndexChanged={index => {
          setActiveIndexTab(() => index);
        }}
        showsPagination={false}
        style={style.swiper}>
        {offerData.map((data, index) => (
          <Offer index={index} key={data} />
        ))}
      </Swiper>

      <View style={style.secondContainer}>
        <View style={style.circleContainer}>
          <View
            style={
              activeIndexTab === 0 ? style.activeTab : style.circle
            }></View>
          <View
            style={
              activeIndexTab === 1 ? style.activeTab : style.circle
            }></View>
          <View
            style={
              activeIndexTab === 2 ? style.activeTab : style.circle
            }></View>
        </View>
      </View>
    </>
  );
}
