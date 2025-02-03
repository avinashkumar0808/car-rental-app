import {Image, ScrollView, View} from 'react-native';
import {useRef, useState} from 'react';
import StarRating from 'react-native-star-rating-widget';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';
import { useContext } from 'react';

import HeadingText from '../../commonComponent/HeadingText';
import {style} from './style';
import CustomText from '../../commonComponent/CutstomText';
import {starWithColor, starWithoutColor} from '../../../utils/constants/icons';
import {SvgXml} from 'react-native-svg';
import Input from '../../commonComponent/TextInput';
import SubmitButton from '../../commonComponent/FormSubmitButton';
import Backdrop from '../../commonComponent/Backdrop';
import Header from '../../commonComponent/Header';
import {StackActions} from '@react-navigation/native';
import { UserContext } from '../../store/userContext/User';

export default function ReviewScreen({navigation, route}) {
  const user = useContext(UserContext);
 
  const {car} = route.params.data;
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef();
  const parentRef = useRef([inputRef]);
  async function handleSendButtonClick() {
    setIsLoading(true);
    firestore()
      .collection('carRentalReview')
      .add({id: car?.currCarId, text, rating,name:user.user.name,photo:car?.frontImageURL,date:new Date().getTime()})
      .then(() => {
        console.log('success');
        setIsLoading(false);
        navigation.dispatch(StackActions.pop(1));
      })
      .catch(() => {
        console.log('failed');
      });
  }
  return (
    <>
      <Header />
      <ScrollView
        style={style.container}
        automaticallyAdjustKeyboardInsets={true}
        keyboardShouldPersistTaps={'handled'}>
        <HeadingText headingText={'Review'} />
        <View style={style.innerContainer}>
          <Image source={{uri: car?.backImageURL}} style={style.image} />
          <CustomText style={style.headingText}>{car?.dealerName}</CustomText>
          <CustomText style={style.simpleText}>{car?.address}</CustomText>
        </View>
        <StarRating
          rating={rating}
          onChange={setRating}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          starSize={50}
        />
        <Input
          label={'Write review (Optional)'}
          textArea
          placeholder={'Tell us about the service'}
          ref={parentRef}
          changeFun={setText}
        />
        <SubmitButton text={'send'} onPress={handleSendButtonClick} />
      </ScrollView>

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
