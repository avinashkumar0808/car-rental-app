import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {style} from './style';
import CustomText from '../../../../commonComponent/CutstomText';
import ListKeyValue from '../../../../commonComponent/ListKeyValue';
import HostDetails from './component/HostDetails';
import Review from '../../../../commonComponent/Review';
import {Screen_Routes} from '../../../../../utils/constants/Routes';

export default function CarDetail({currData}) {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <CustomText type={'bold'} style={style.largeNameText}>
        {currData?.carName}
      </CustomText>
   <View style={style.keyValueContainer}>
   <CustomText style={style.aboutText}>
        {currData?.carDescription}
      </CustomText>
   </View>
      <CustomText type={'bold'} style={style.carDetailHeadingText}>
        CAR DETAILS
      </CustomText>
      <View style={style.keyValueContainer}>
        <ListKeyValue keyValue={'Fuel'} value={currData?.fuelType} />
        <ListKeyValue keyValue={'Interior Color'} value={currData?.carColor} />
        <ListKeyValue keyValue={'Kilometers'} value={currData?.kilometers} />
        <ListKeyValue keyValue={'Seats'} value={currData?.seats} />
        <ListKeyValue
          keyValue={'Transmission'}
          value={currData?.transmission}
        />
      </View>

      <CustomText style={style.hostDetailHeading}>HOST DETAIL</CustomText>
      <View style={style.keyValueContainer}>
        
        <HostDetails
          hostDetails={{
            name: currData?.dealerName,
            photo: currData?.backImageURL,
            address: currData?.address,
            ratings: '0',
          }}
        />
      </View>
      <CustomText style={style.reviewHeading}>REVIEWS {`(${0})`}</CustomText>
    </View>
  );
}

/* 
     
     

     
      <Review reviewData={currData?.reviewsAndComments[0]} />
      <Review reviewData={currData?.reviewsAndComments[1]} />
      <Pressable
        onPress={() =>
          navigation.navigate(Screen_Routes.AllReviews, {
            reviews: currData?.reviewsAndComments,
          })
        }>
        <CustomText style={style.previewText}>See more review</CustomText>
      </Pressable> */
