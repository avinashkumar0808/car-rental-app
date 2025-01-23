import {View} from 'react-native';
import Swiper from 'react-native-swiper';
import CarImage from '../CarImage';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';

import {style} from './style';
import {leftIconWhite} from '../../../../../utils/constants/icons';

export default function CarImageSwiper({currData}) {
  const navigation = useNavigation();
  const [activeIndexTab, setActiveIndexTab] = useState(0);
  return (
    <View>
      <Swiper
        loop={false}
        onIndexChanged={index => {
          setActiveIndexTab(() => index);
        }}
        showsPagination={false}
        style={style.swiper}>
        {currData?.moreImageURLList.map(image => (
          <CarImage image={image} key={image} />
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
    </View>
  );
}
