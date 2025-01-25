import {View, Image, Pressable} from 'react-native';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';

import CustomText from '../../../../commonComponent/CutstomText';
import {style} from './style';
import { SvgXml } from 'react-native-svg';
import { calendar } from '../../../../../utils/constants/icons';

export default function CheckoutCarDetails({currData, date, setDate}) {
  const [open, setOpen] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
  <>
    <View style={style.container}>
      <View>
        <CustomText style={style.headingText}>{currData?.carName}</CustomText>
        <CustomText style={style.price}>£{currData?.fare}.00 / day</CustomText>
        <CustomText style={style.bottomText}>
            {currData?.address}
          </CustomText>
    
        <DatePicker
          modal
          mode={'date'}
          minimumDate={new Date()}
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDateSelected(true);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <Image source={{uri: currData?.frontImageURL}} style={style.image} />
    </View>
        <Pressable onPress={() => setOpen(true)} style={style.dateSelector}>
          {dateSelected?<CustomText style={style.dateButtonText}>{formattedDate.format(date)}</CustomText>:<CustomText style={style.dateButtonText}>Select your trip date</CustomText>}
         <SvgXml xml={calendar} height={24} width={24}/>
        </Pressable>
  </>
  );
}
