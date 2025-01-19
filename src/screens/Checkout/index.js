import {Pressable, ScrollView, View} from 'react-native';
import {useContext, useState} from 'react';


import CustomText from '../../commonComponent/CutstomText';
import {style} from './style';
import CheckoutCarDetails from './components/CheckoutCarDetails';
import ListKeyValue from '../../commonComponent/ListKeyValue';
import Additional from './components/Additional';
import {UserContext} from '../../store/userContext/User';
import SubmitButton from '../../commonComponent/FormSubmitButton';
import Backdrop from '../../commonComponent/Backdrop';
import Header from '../../commonComponent/Header';
import Modal from './components/Modal';
import { Screen_Routes } from '../../../utils/constants/Routes';

export default function Checkout({navigation, route}) {
  const [isBackdropOpen, setIsBackDropOpen] = useState(false);
  const currData = route.params.currData;
  const {user, address} = useContext(UserContext);
  const [total, setTotal] = useState(+currData.fare+5);
  const [discountCodeText, setDiscountCodeText] = useState(`Use a discount code`);

  return (
    <>
      <Header />
      <ScrollView style={style.container}>
        <CustomText style={style.headingText} type={'extraBold'}>
          Checkout
        </CustomText>
        <CustomText style={style.carDetailHeadingText}>CAR DETAIL</CustomText>
        <CheckoutCarDetails currData={currData} />
        <CustomText style={style.carDetailHeadingText}>
          RENTER INFORMATION
        </CustomText>
        <View style={style.keyValueContainer}>
          <ListKeyValue keyValue={'Full name'} value={user.name} sm />
          <ListKeyValue
            keyValue={'Address line'}
            value={`Longitude:${address[0]}, Latitude:${address[1]}`}
             sm
          />
          <ListKeyValue keyValue={'Email address'} value={user.email} sm />
        </View>

        <CustomText style={style.carDetailHeadingText}>DISCOUNT</CustomText>
        <Pressable style={style.discountCodeButton} onPress={()=>setIsBackDropOpen(true)}>
          <CustomText style={style.discountCodeButtonText}>
            {discountCodeText}
          </CustomText>
          <View style={style.leftCircle} /> 
          <View style={style.rightCircle} />
        </Pressable>
        <CustomText style={style.carDetailHeadingText}>
          PRICE DETAILS
        </CustomText>
        <View>
          <ListKeyValue
            keyValue={'Trip price'}
            value={`£${currData.fare}.00`}
          />
          <ListKeyValue keyValue={'Delivery Price'} value={`£3.00`} />
          <ListKeyValue keyValue={'VAT'} value={`£2.00`} />
        </View>
        <View style={style.totalContainer}>
          <ListKeyValue keyValue={'Total'} value={`£${total}.00`} />
        </View>
        <View style={style.submitButtonContainer}>
          <SubmitButton text={'Payment'} onPress={()=>navigation.navigate(Screen_Routes.ProtectionPlans)}/>
        </View>
      </ScrollView>
     {isBackdropOpen &&  <Backdrop>
        <Modal setIsBackDropOpen={setIsBackDropOpen} setDiscountCodeText={setDiscountCodeText} setTotal={setTotal} />
      </Backdrop>}
    </>
  );
}
