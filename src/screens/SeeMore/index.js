import {ScrollView, View} from 'react-native';
import { useContext } from 'react';

import TopCar from '../../commonComponent/TopCar';
import {topCarData} from '../../../utils/constants/dummyData/topCarsData';
import {style} from './style';
import { CarContext } from '../../store/carContext/CarsContext';

export default function SeeMore() {
  const {cars} = useContext(CarContext);
  console.log(cars);

  return (
    <ScrollView style={style.container}>
    <View style={style.innerContainer}>
      {
          cars.map((data,index) => (
            <TopCar data={data?.carDetails} full key={index} />
          ))
      }
    </View>
    </ScrollView>
  );
}
