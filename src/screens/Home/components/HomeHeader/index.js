import {Text, View, Animated, useAnimatedValue} from 'react-native';
import {SvgXml} from 'react-native-svg';
import GetLocation from 'react-native-get-location';
import {useEffect, useState,memo} from 'react';

import {
  bellIcon,
  downArrowIcon,
  searchIcon,
} from '../../../../../utils/constants/icons';
import {style} from './style';

const HomeHeader = memo(function HomeHeader() {
  const intialOpacity = useAnimatedValue(0);
  const [longLat, setLongLat] = useState([]);
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
  })
    .then(location => {
      setLongLat([location?.longitude, location?.latitude]);
    })
    .catch(error => {
      const {code, message} = error;
      console.warn(code, message);
    });

  useEffect(() => {
    Animated.loop(
      Animated.timing(intialOpacity, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <View style={style.container}>
      <View>
        <View style={style.leftTop}>
          <Text style={style.leftTopText}>Your location</Text>
          <SvgXml xml={downArrowIcon} height={30} width={25} />
        </View>
        {longLat.length !== 0 ? (
          <View style={style.leftTopLargeTextContainer}>
            <Text style={style.leftTopLargeText}>
              Longitude:{`${longLat[0]}`}
            </Text>
            <Text
              style={style.leftTopLargeText}>{`Latitude: ${longLat[1]}`}</Text>
          </View>
        ) : (
          <Animated.View
            style={{...style.shimmer, opacity: intialOpacity}}></Animated.View>
        )}
      </View>
      <View style={style.headingRight}>
        <SvgXml xml={searchIcon} height={30} width={25} />
        <SvgXml xml={bellIcon} height={30} width={25} />
      </View>
    </View>
  );
});
export default HomeHeader;
