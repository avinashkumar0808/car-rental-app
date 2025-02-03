import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {style} from './style';
import CustomText from '../../../../commonComponent/CutstomText';
import ListKeyValue from '../../../../commonComponent/ListKeyValue';
import HostDetails from './component/HostDetails';
import Review from '../../../../commonComponent/Review';
import {Screen_Routes} from '../../../../../utils/constants/Routes';

export default function CarDetail({currData}) {
  console.log(currData?.rev);
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <CustomText type={'bold'} style={style.largeNameText}>
        {currData?.carName}
      </CustomText>
      <View>
        <CustomText style={style.aboutText}>
          {currData?.carDescription}
        </CustomText>
      </View>
      <CustomText type={'bold'} style={style.carDetailHeadingText}>
        CAR DETAILS
      </CustomText>
      <View style={style.keyValueContainer}>
        <ListKeyValue keyValue={'Fuel'} value={currData?.fuelType} sm />
        <ListKeyValue
          keyValue={'Interior Color'}
          value={currData?.carColor}
          sm
        />
        <ListKeyValue keyValue={'Kilometers'} value={currData?.kilometers} sm />
        <ListKeyValue keyValue={'Seats'} value={currData?.seats} sm />
        <ListKeyValue
          keyValue={'Transmission'}
          value={currData?.transmission}
        />
      </View>

      <CustomText style={style.hostDetailHeading}>HOST DETAIL</CustomText>
      <View>
        <HostDetails
          hostDetails={{
            name: currData?.dealerName,
            photo: currData?.backImageURL,
            address: currData?.address,
            ratings: currData?.rev?.reduce((acc, data)=>acc+data.rating,0)/currData?.rev?.length,
          }}
        />
      </View>
      <CustomText style={style.reviewHeading}>
        REVIEWS {`(${currData?.rev.length})`}
      </CustomText>

      {currData?.rev.length > 0 && <Review reviewData={currData?.rev[0]} />}
      {currData?.rev.length > 1 && (
        <Pressable
          onPress={() =>
            navigation.navigate(Screen_Routes.AllReviews, {
              reviews: currData?.rev,
            })
          }>
          <CustomText style={style.previewText}>See more review</CustomText>
        </Pressable>
      )}
    </View>
  );
}
