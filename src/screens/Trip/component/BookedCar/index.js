import {ImageBackground, Pressable, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CustomText from '../../../../commonComponent/CutstomText';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {style} from './style';
import SubmitButton from '../../../../commonComponent/FormSubmitButton';
import {Screen_Routes} from '../../../../../utils/constants/Routes';
import BookedCarFooter from './component/BookedCarFooter';

export default function BookedCar({
  car,
  id,
  setIsLoading,
  setBookedCar,
  setBookingData,
  setCurrActive,
  setCanUpdate,
  setDeleteData,
}) {
  const navigation = useNavigation();
  function handleBookAgain() {
    navigation.navigate(Screen_Routes.CarDetails, {data: car});
  }
  function handleReview() {
    navigation.navigate(Screen_Routes.Review, {data:{car, id}});
  }

  const date = new Date(car?.date);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  async function handleCompleteClick() {
    console.log(id);
    firestore()
      .collection('carRentalCarBookings')
      .doc(id)
      .set({...car, status: 'Completed'})
      .then(documentSnapshot => {
        console.log('done');
        setCanUpdate(true);

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

          setIsLoading(false);
          setCurrActive('All');
        })();
      })
      .catch(error => console.log(error));
  }

  return (
    <View style={style.container}>
      <ImageBackground
        borderRadius={15}
        source={{uri: car?.frontImageURL}}
        style={style.carImageContainer}>
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0.18)',
            'rgba(0, 0, 0, 0.15)',
            'rgba(0, 0, 0, 0.1)',
            'rgba(0, 0, 0, 0.05)',
          ]}
          style={style.linearGradientContainer}>
          <View>
            <Pressable style={style.labelTextButton}>
              <CustomText style={style.labelText}>{car?.status}</CustomText>
            </Pressable>
          </View>
        </LinearGradient>
      </ImageBackground>
      <CustomText style={style.headingText}>{car?.carName}</CustomText>

      <CustomText style={style.simpleText}>
        {car?.address} {formattedDate.format(date)}
      </CustomText>

      {car?.status === 'Ongoing' ? (
        <SubmitButton text={'Complete'} onPress={handleCompleteClick} />
      ) : (
        <BookedCarFooter
          handleBookAgain={handleBookAgain}
          handleReview={handleReview}
          setDeleteData={setDeleteData}
          car={car}
          id={id}
        />
      )}
    </View>
  );
}
