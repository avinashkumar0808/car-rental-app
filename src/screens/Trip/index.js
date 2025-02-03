import {ScrollView, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';

import BottomTab from '../../commonComponent/BottomTab';
import Header from '../../commonComponent/Header';
import {style} from './style';
import CustomText from '../../commonComponent/CutstomText';
import {useCallback, useEffect, useState} from 'react';
import Backdrop from '../../commonComponent/Backdrop';
import TripHeader from './component/TripHeader';
import BookedCar from './component/BookedCar';
import NoElementUI from './component/NoElementUI';
import Modal from './component/Modal';

export default function Trip({navigation, route}) {
  const [bookingData, setBookingData] = useState(null);
  const [bookedCar, setBookedCar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currActive, setCurrActive] = useState('All');
  const [canUpdate, setCanUpdate] = useState(true);
  const [idArray, setIdArray] = useState(null);

  const [deleteData, setDeleteData] = useState(null);

  const filter = useCallback(
    function (keyword) {
      if (keyword === 'All') {
        setBookingData(bookedCar?.carData);
        setIdArray(bookedCar.idArray);
      } else {
        const filteredData = [];
        const newIdArray = [];

        bookedCar?.carData?.forEach((data, index) => {
          if (data.status === keyword) {
            newIdArray.push(bookedCar.idArray[index]);
            filteredData.push(data);
          }
        });

        setBookingData(() => [...filteredData]);
        setIdArray(() => [...newIdArray]);
      }
    },
    [bookedCar],
  );
  async function handleCancel() {
    const {car, id} = deleteData;
    console.log(id);
    firestore()
      .collection('carRentalCarBookings')
      .doc(id)
      .set({...car, status: 'Cancelled'})
      .then(documentSnapshot => {
        console.log('done');
        setCanUpdate(false);

        (async () => {
          setIsLoading(true);
          const arr = [];
          const idArray = [];
          const result = await firestore()
            .collection('carRentalCarBookings')
            .get();
          result.forEach(data => {
            idArray.push(data?.id);
            arr.push(data.data());
          });

          setBookedCar({carData: arr, idArray});
          setCanUpdate(true);
          setCurrActive('All');
          setIsLoading(false);
        })();
      })
      .catch(error => console.log(error));
  }
  useEffect(() => {
    if (canUpdate) {
      (async () => {
        setIsLoading(true);
        const arr = [];
        const idArrayTemp = [];
        const result = await firestore()
          .collection('carRentalCarBookings')
          .get();
        result.forEach(data => {
          idArrayTemp.push(data?.id);
          arr.push(data.data());
        });

        setBookedCar({carData: arr, idArray: idArrayTemp});
        setIdArray(idArrayTemp);
        setBookingData(arr);
        setIsLoading(false);
        setCanUpdate(false);
      })();
    }
    navigation.addListener('focus', () => {
      setCurrActive('All');
      (async () => {
        setIsLoading(true);
        const arr = [];
        const idArrayTemp = [];
        const result = await firestore()
          .collection('carRentalCarBookings')
          .get();
        result.forEach(data => {
          idArrayTemp.push(data?.id);
          arr.push(data.data());
        });

        setBookedCar({carData: arr, idArray: idArrayTemp});
        setIdArray(idArrayTemp);
        setBookingData(arr);
        setIsLoading(false);
      })();
    });
  }, [canUpdate]);
  return (
    <>
      <ScrollView style={style.container}>
        <CustomText style={style.headingText}>Trip</CustomText>
        <TripHeader
          filter={filter}
          currActive={currActive}
          setCurrActive={setCurrActive}
        />
        {bookingData?.length === 0 && <NoElementUI />}
        <View>
          {bookingData &&
            idArray &&
            bookingData.map((car, index) => (
              <BookedCar
                key={idArray[index]}
                car={car}
                id={idArray[index]}
                setBookingData={setBookingData}
                setIsLoading={setIsLoading}
                setBookedCar={setBookedCar}
                setCurrActive={setCurrActive}
                setCanUpdate={setCanUpdate}
                setDeleteData={setDeleteData}
              />
            ))}
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
      {deleteData && (
        <Backdrop>
          <Modal
            setIsBackDropOpen={setDeleteData}
            handleCancel={handleCancel}
          />
        </Backdrop>
      )}
    </>
  );
}
