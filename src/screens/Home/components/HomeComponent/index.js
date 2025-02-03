import {Pressable, ScrollView, Text, View} from 'react-native';
import { useContext } from 'react';

import {style} from './style';
import HomeHeader from '../HomeHeader';
import OfferSwipper from '../OfferSwipper';
import TopCarsSwiper from '../TopCarsSwiper';
import BottomTab from '../../../../commonComponent/BottomTab';
import { useNavigation } from '@react-navigation/native';
import { Screen_Routes } from '../../../../../utils/constants/Routes';
import { CarContext } from '../../../../store/carContext/CarsContext';

export default function HomeComponent() {
  const navigation = useNavigation();
  return (
 <>
    <ScrollView style={style.container}>
      <HomeHeader />
      <OfferSwipper />
      <View style={style.carDetailsHeading}>
        <Text style={style.carDetailsHeadingText}>Top Vehicle</Text>
        <Pressable style={style.pressibleButton} onPress={()=>navigation.navigate(Screen_Routes.MoreCars, )}>
          <Text style={style.pressibleButtonText}>See all</Text>
        </Pressable>
      </View>
<TopCarsSwiper/>
    </ScrollView>
 <BottomTab/>
 </>
  );
}
