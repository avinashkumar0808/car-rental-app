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
        {currData.name}
      </CustomText>
      <CustomText style={style.aboutText}>{currData.aboutCar}</CustomText>
      <CustomText type={'bold'} style={style.carDetailHeadingText}>
        CAR DETAILS
      </CustomText>
      <View style={style.keyValueContainer}>
        {currData.moreDetails.map(data => (
          <ListKeyValue
            keyValue={data.key}
            value={data.value}
            key={`${data.key}${data.value}`}
          />
        ))}
      </View>
      <CustomText style={style.hostDetailHeading}>HOST DETAIL</CustomText>
      <HostDetails hostDetails={currData.hostDetails} />
      <CustomText style={style.reviewHeading}>
        REVIEWS {`(${currData.reviewsAndComments.length})`}
      </CustomText>
      <Review reviewData={currData.reviewsAndComments[0]} />
      <Review reviewData={currData.reviewsAndComments[1]} />
      <Pressable
        onPress={() =>
          navigation.navigate(Screen_Routes.AllReviews, {
            reviews: currData.reviewsAndComments,
          })
        }>
        <CustomText style={style.previewText}>See more review</CustomText>
      </Pressable>
    </View>
  );
}
