import {View, Image, Pressable} from 'react-native';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';

import CustomText from '../../../../commonComponent/CutstomText';
import {style} from './style';

export default function CheckoutCarDetails({currData, date, setDate}) {
  const [open, setOpen] = useState(false);
  console.log(date);
  return (
    <View style={style.container}>
      <View>
        <CustomText style={style.headingText}>{currData?.carName}</CustomText>
        <CustomText style={style.price}>£{currData?.fare}.00 / day</CustomText>
        <Pressable onPress={() => setOpen(true)}>
          <CustomText style={style.bottomText}>
            {' '}
            {currData?.address}, {new Intl.DateTimeFormat('en-US').format(date)}
          </CustomText>
        </Pressable>
        <DatePicker
          modal
          mode={'date'}
          minimumDate={new Date()}
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <Image source={{uri: currData?.frontImageURL}} style={style.image} />
    </View>
  );
}
