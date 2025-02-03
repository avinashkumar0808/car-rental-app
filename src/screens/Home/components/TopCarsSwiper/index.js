import {ScrollView} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState, useContext} from 'react';

import {style} from './style';
import TopCar from '../../../../commonComponent/TopCar';
import CustomText from '../../../../commonComponent/CutstomText';
import {CarContext} from '../../../../store/carContext/CarsContext';
import { useNavigation } from '@react-navigation/native';

export default function TopCarsSwiper() {
  const navigation = useNavigation();
  const carData = firestore().collection('carRentalCars');
  const reviewData = firestore().collection('carRentalReview');
  const [cars, setCars] = useState([]);
  const [carId, setCarId] = useState([]);
  const [review, setReview] = useState([]);

  const {updateCars, updateCarId, updateReviews} = useContext(CarContext);
  useEffect(() => {
    (async () => {
      setCars([]);
      carData.get().then(querySnapshot => {
        const arr = [];
        const id = [];
        querySnapshot.forEach(documentSnapshot => {
          arr.push(documentSnapshot?.data());
          id.push(documentSnapshot?.id);
        });
        setCarId(id);
        setCars(arr);
        updateCarId(id)
        updateCars(arr);
      });
      reviewData.get().then(querySnapshot => {
        const rev = [];
        querySnapshot.forEach(documentSnapshot => {
          rev.push(documentSnapshot?.data());
        });
        setReview(rev);
        updateReviews(rev);
      });
    })();
    navigation.addListener('focus',()=>{
      (async () => {
        setCars([]);
        carData.get().then(querySnapshot => {
          const arr = [];
          const id = [];
          querySnapshot.forEach(documentSnapshot => {
            arr.push(documentSnapshot?.data());
            id.push(documentSnapshot?.id);
          });
          setCarId(id);
          setCars(arr);
  
          updateCars(arr);
        });
        reviewData.get().then(querySnapshot => {
          const rev = [];
          querySnapshot.forEach(documentSnapshot => {
            rev.push(documentSnapshot?.data());
          });
          setReview(rev);
        });
      })();
    })
    
  }, [navigation]);

  return cars ? (
    <ScrollView horizontal={true} style={style.container}>
      {cars.map((data, index) => {
        return (
          <TopCar data={data?.carDetails} key={index} parentId={carId[index]} review={review} />
        );
      })}
    </ScrollView>
  ) : (
    <CustomText>No data</CustomText>
  );
}
