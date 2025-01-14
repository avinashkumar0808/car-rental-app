import { Image,View } from "react-native";
import CustomText from "../CutstomText";
import { style } from "./style";

export default function Review({reviewData}){
  return <View style={style.conatiner}>
<View style={style.imageAndTextContainer}>
  <Image source={{uri:reviewData.photo}} style={style.image}/>
  <CustomText style={style.ratingsOnImage}>⭐️{reviewData.ratings}</CustomText>
</View>
<View>
  <View style={style.nameAndDateContainer}>
    <CustomText style={style.nameText}>{reviewData.name}</CustomText>
    <CustomText style={style.dateText}>{reviewData.date}</CustomText>
  </View>
<View style={style.commentParagaraphContainer}>
<CustomText style={style.commentText}>"{reviewData.comment}"</CustomText>
</View>
</View>
  </View>
}