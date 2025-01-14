import {View, ImageBackground, ScrollView, Pressable} from 'react-native';
import {SvgXml} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-clipboard/clipboard';
import {useState} from 'react';

import {offerData} from '../../../utils/constants/dummyData/OfferData';
import {style} from './style';
import {leftIconWhite} from '../../../utils/constants/icons';
import CustomText from '../../commonComponent/CutstomText';

export default function PromoDetails({navigation, route}) {
  const currOffer = offerData[route.params.curr];
  const [copied, setCopied] = useState(false);

  function handleCopyButtonClick() {
    setCopied(true);
    Clipboard.setString(currOffer.promoCode);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <ScrollView style={style.container}>
      <ImageBackground
        source={{uri: currOffer.image}}
        style={style.backgroundImage}>
        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0.3)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0)',
          ]}
          style={style.linearGradient}>
          <SvgXml
            xml={leftIconWhite}
            height={40}
            width={40}
            onPress={() => navigation.goBack()}
          />
        </LinearGradient>
      </ImageBackground>
      <CustomText type={'bold'} style={style.headingText}>
        {currOffer.heading}
      </CustomText>
      <View style={style.promoCodeContainer}>
        <View>
          <CustomText style={style.promoHeading}>PROMO CODE</CustomText>
          <CustomText style={style.promoCodeText}>
            {currOffer.promoCode}
          </CustomText>
        </View>
        <Pressable
          style={!copied ? style.copyButton : style.copied}
          onPress={() => handleCopyButtonClick()}>
          <CustomText style={style.copyButtonText}>{copied?"Copied":"Copy"}</CustomText>
        </Pressable>
      </View>
      <View style={style.detailsContainer}>
        <CustomText style={style.detailText}>{currOffer.details}</CustomText>
        <CustomText style={style.termsAndContionsHeading} type={'bold'}>Terms and Condtions</CustomText>
         {currOffer.termsAndCondtions.map((data)=><CustomText key={data} style={style.termsAndConditions}>{`  \u2022 ${data}`}</CustomText>)}
      </View>
    </ScrollView>
  );
}
