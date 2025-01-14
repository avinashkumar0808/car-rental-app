import {Pressable, ScrollView,View} from 'react-native';

import {style} from './style';
import CarImageSwiper from './component/CarImageSwiper';
import CarDetail from './component/CarDetail';
import CustomText from '../../commonComponent/CutstomText';
import { Screen_Routes } from '../../../utils/constants/Routes';


export default function CarDetails({route, navigation}) {
  const currData = route.params.data;
  return (
    <ScrollView style={style.container}>
<ScrollView style={style.innerContainer}>
<CarImageSwiper currData={currData}/>
<CarDetail currData={currData}/>
</ScrollView>
<View style={style.outterContainer}>
<View>
  <CustomText style={style.outterContainerHeadingText}>
    {currData.name}
  </CustomText>
  <CustomText style={style.outterBorderPriceText}>
  £{currData.fare}.00/ day
  </CustomText>
</View>
<Pressable style={style.outterContainerPressable} onPress={()=>navigation.navigate(Screen_Routes.Checkout, {currData})}>
  <CustomText style={style.outterContainerPressableText}>Rent Car</CustomText>
  
</Pressable>
</View>
    </ScrollView>
  );
}
 