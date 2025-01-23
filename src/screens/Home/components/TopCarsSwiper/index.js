import {ScrollView} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState,useContext} from 'react';


import {style} from './style';
import TopCar from '../../../../commonComponent/TopCar';
import CustomText from '../../../../commonComponent/CutstomText';
import { CarContext } from '../../../../store/carContext/CarsContext';

export default function TopCarsSwiper() {
  const carData = firestore().collection('carRentalCars');
  const [cars, setCars] = useState([]);
const {updateCars} = useContext(CarContext);
  useEffect(() => {
    (async () => {
      carData.get().then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setCars(prev => [...prev, documentSnapshot.data()]);
          updateCars(documentSnapshot.data())
        });
      }); 
    })();
    
  }, []);

  return cars ? (
    <ScrollView horizontal={true} style={style.container}>
      {console.log(cars)}
      {cars.map((data, index) => {
        return <TopCar data={data?.carDetails} key={index} />;
      })}
    </ScrollView>
  ) : (
    <CustomText>No data</CustomText>
  );
}
