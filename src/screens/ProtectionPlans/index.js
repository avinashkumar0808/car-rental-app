import {ScrollView, View} from 'react-native';
import CustomText from '../../commonComponent/CutstomText';
import {useState} from 'react';
import {StackActions} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';
import Backdrop from '../../commonComponent/Backdrop';

import {style} from './style';
import StandardPlan from './component/StandardPlan';
import {protectionPlan} from '../../../utils/constants/dummyData/protectionPlans';
import SubmitButton from '../../commonComponent/FormSubmitButton';
import {Screen_Routes} from '../../../utils/constants/Routes';
import Header from '../../commonComponent/Header';

export default function ProtectionPlans({navigation, route}) {
  const [active, setActive] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  console.log(route.params.date)

  async function handleButtonClick() {
    setIsLoading(true);
    await firestore()
      .collection('carRentalCarBookings')
      .add( {...route.params.car, status: 'Ongoing'});

    setIsLoading(false);
    navigation.dispatch(StackActions.popTo(Screen_Routes.HomeNavigator));
    navigation.navigate(Screen_Routes.FinalCheckout);
  }

  return (
    <>
    <Header/>
      <ScrollView style={style.container}>
        <CustomText style={style.headingText}>Protection plans</CustomText>
        <View style={style.planContainer}>
          {protectionPlan.map((data, index) => (
            <StandardPlan
              key={data.name}
              data={data}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </View>
        <SubmitButton text={'Continue'} onPress={handleButtonClick} />
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
