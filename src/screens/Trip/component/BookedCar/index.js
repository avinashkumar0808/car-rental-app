import {ImageBackground, Pressable, View} from 'react-native';
import {style} from './style';
import CustomText from '../../../../commonComponent/CutstomText';
import LinearGradient from 'react-native-linear-gradient';
import SubmitButton from '../../../../commonComponent/FormSubmitButton';

export default function BookedCar({car}) {
  console.log(car?.date);
  const date = new Date(car?.date);
  const formattedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric',
    month: 'long',
    day: 'numeric',});
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

        <CustomText style={style.simpleText}>{car?.address} {formattedDate.format(date)}</CustomText>

      {car?.status ?<SubmitButton text={'Complete'}/>:null}
    </View>
  );
}
