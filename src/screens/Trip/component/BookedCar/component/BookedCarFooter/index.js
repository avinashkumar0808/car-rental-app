import {Pressable, View} from 'react-native';

import {style} from './style';
import CustomText from '../../../../../../commonComponent/CutstomText';

export default function BookedCarFooter({handleBookAgain, setDeleteData, car, id,handleReview}) {
  return (
    <View style={style.container}>
      <Pressable style={style.button} onPress={()=>handleReview()}>
        <CustomText style={style.buttonText}>Write a review</CustomText>
      </Pressable>
      <Pressable style={style.bookAgain} onPress={handleBookAgain}>
        <CustomText>Book again</CustomText>
      </Pressable>
      <View style={style.innerContainer}>
     {      car?.status !== 'Cancelled' &&    <Pressable style={style.deleteButton} onPress={()=>setDeleteData({car,id})}>
     
 <CustomText style={style.buttonText}>Cancel</CustomText> 
     
      </Pressable>}
      </View>
    </View>
  );
}
