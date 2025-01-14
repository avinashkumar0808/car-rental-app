import { Pressable, ScrollView, View } from "react-native";

import CustomText from "../../commonComponent/CutstomText";
import { style } from "./style";
import CheckoutCarDetails from "./components/CheckoutCarDetails";
import ListKeyValue from "../CarDetails/component/CarDetail/component/ListKeyValue";
import Additional from "./components/Additional";


export default function Checkout({navigation, route}){
  const currData = route.params.currData;
  return <ScrollView style={style.container}>
    <CustomText style={style.headingText} type={'extraBold'}>Checkout</CustomText>
    <CustomText style={style.carDetailHeadingText}>CAR DETAIL</CustomText>
<CheckoutCarDetails currData = {currData}/>
<CustomText style={style.carDetailHeadingText}>RENTER INFORMATION</CustomText>
<View style={style.keyValueContainer}><ListKeyValue keyValue={'Full name'} value={'Renter Name'}/>
<ListKeyValue keyValue={'Address line'} value={'Renter Address'}/>
<ListKeyValue keyValue={'Full name'} value={'test@test.com'}/></View>
<CustomText>ADDITIONAL</CustomText>
<View style={style.additionalContainer}>
<Additional heading={'Protection plans'} text={'To protect if accident happens.'}/>
<Additional heading={'Extra'} text={'Additional service that we prove for you.'}/>
</View>
<Pressable style={style.discountCodeButton}>
  <CustomText>
    Use a discount code
  </CustomText>
  <View style={style.leftCircle}/>
  <View style={style.rightCircle}/>
</Pressable>
  </ScrollView>
}