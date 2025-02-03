import { Pressable, ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';

import { style } from './style';
import CarImageSwiper from './component/CarImageSwiper';
import CarDetail from './component/CarDetail';
import CustomText from '../../commonComponent/CutstomText';
import { Screen_Routes } from '../../../utils/constants/Routes';
import { leftIconWhite } from '../../../utils/constants/icons';

export default function CarDetails({ route, navigation }) {
  const currData = { ...route.params.data.data, rev: route.params.data.rev };
  console.log(currData);
  const currCarId = route.params.data.parentId;
  console.log(currCarId);
  return (
    <>
      <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.1)',
          'rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0)',
        ]}
        style={style.headerUI}>
        <SvgXml
          xml={leftIconWhite}
          height={40}
          width={40}
          onPress={() => navigation.goBack()}
        />
      </LinearGradient>
      <View style={style.container}>
        <ScrollView style={style.innerContainer}>
          <CarImageSwiper currData={currData} />
          <CarDetail currData={currData} />
        </ScrollView>
        <View style={style.outterContainer}>
          <View>
            <CustomText style={style.outterContainerHeadingText}>
              {currData?.carName}
            </CustomText>
            <CustomText style={style.outterBorderPriceText}>
              £{currData.fare}.00/ day
            </CustomText>
          </View>
          <Pressable
            style={style.outterContainerPressable}
            onPress={() =>
              navigation.navigate(Screen_Routes.Checkout, {
                currData: { currData, currCarId },
              })
            }>
            <CustomText style={style.outterContainerPressableText}>
              Rent Car
            </CustomText>
          </Pressable>
        </View>
      </View>
    </>

  );
}
