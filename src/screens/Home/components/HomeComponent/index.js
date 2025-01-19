import {Pressable, ScrollView, Text, View} from 'react-native';

import {style} from './style';
import HomeHeader from '../HomeHeader';
import OfferSwipper from '../OfferSwipper';
import TopCarsSwiper from '../TopCarsSwiper';
import BottomTab from '../../../../commonComponent/BottomTab';


export default function HomeComponent() {
  return (
 <>
    <ScrollView style={style.container}>
      <HomeHeader />
      <OfferSwipper />
      <View style={style.carDetailsHeading}>
        <Text style={style.carDetailsHeadingText}>Top Vehicle</Text>
        <Pressable style={style.pressibleButton}>
          <Text style={style.pressibleButtonText}>See all</Text>
        </Pressable>
      </View>
<TopCarsSwiper/>
    </ScrollView>
 <BottomTab/>
 </>
  );
}
