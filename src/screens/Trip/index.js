import {ScrollView, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';

import BottomTab from '../../commonComponent/BottomTab';
import Header from '../../commonComponent/Header';
import {style} from './style';
import CustomText from '../../commonComponent/CutstomText';
import {useEffect, useState} from 'react';
import Backdrop from '../../commonComponent/Backdrop';
import TripHeader from './component/TripHeader';
import BookedCar from './component/BookedCar';
import NoElementUI from './component/NoElementUI';

export default function Trip() {
  const [bookingData, setBookingData] = useState(null);
  const [bookedCar, setBookedCar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  function filter(keyword) {
    if (keyword === 'All') {
      setBookingData(bookedCar);
    } else {
      const filteredData = bookedCar.filter(data => data?.status === keyword);
      setBookingData([...filteredData]);
    }
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const arr = [];
      const result = await firestore().collection('carRentalCarBookings').get();
      result.forEach(data => arr.push(data.data()));
      console.log(arr);
      setBookedCar(arr);
      setBookingData(arr);
      setIsLoading(false);
    })();
  }, []);
  return (
    <>
      <ScrollView style={style.container}>
        <CustomText style={style.headingText}>Trip</CustomText>
        <TripHeader filter={filter} />
        {bookingData?.length === 0 && <NoElementUI />}
        <View>
          {bookingData &&
            bookingData.map(car => <BookedCar key={car?.date} car={car} />)}
        </View>
      </ScrollView>
      <BottomTab />
      {isLoading && (
        <Backdrop>
          <LottieView
            source={require('../../../assets/loading.json')}
            autoPlay
            loop
            style={style.lottieAnimation}
          />
        </Backdrop>
      )}
    </>
  );
}
