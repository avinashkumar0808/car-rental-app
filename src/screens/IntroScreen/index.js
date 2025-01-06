import {View} from 'react-native';
import {useRef, useState} from 'react';
import Swiper from 'react-native-swiper';

import Intro from './component/Intro';
import {style} from './IntroScreenStyle';
import {introData} from '../../../utils/constants/dummyData/introData';
import IntroFooter from './component/IntroFooter';

export default function IntroScreen({navigation}) {
  const [activeIndexTab, setActiveIndexTab] = useState(0);
  const swiperRef = useRef();

  function handleSkip() {
    navigation.navigate('Login');
  }
  function handleNext() {
 if(activeIndexTab=== introData.length-1){
  navigation.navigate('Login');
 }
 else{
swiperRef.current.scrollBy(1);
 }
  }
  return (
    <View style={style.container}>
      <Swiper
      ref={swiperRef}
        loop={false}
        onIndexChanged={index => {
          console.log('index is', index);
          setActiveIndexTab(()=>index);
        }}
        showsPagination={false}>
        {introData.map((data, index) => (
          <Intro
            image={data.image}
            heading={data.heading}
            textContent={data.textContent}
            activeIndex={activeIndexTab}
            setActiveIndex={setActiveIndexTab}
            key={index}
          />
        ))}
      </Swiper>
      <IntroFooter
        handleNext={handleNext}
        handleSkip={handleSkip}
        activeIndexTab={activeIndexTab}
        setActiveIndexTab={setActiveIndexTab}
      />
    </View>
  );
}
