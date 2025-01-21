import {Image, Pressable, ScrollView, View} from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import {useState, useRef} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import { utils } from '@react-native-firebase/app';
// import storage from '@react-native-firebase/storage';


import {style} from './style';
import SubmitButton from '../../../../commonComponent/FormSubmitButton';
import Header from '../../../../commonComponent/Header';
import AddCarHeader from '../../components/AddCarHeader';


import CustomText from '../../../../commonComponent/CutstomText';

import ImagePicker from '../../../../commonComponent/ImagePicker';
import {SvgXml} from 'react-native-svg';
import {addIconGrey} from '../../../../../utils/constants/icons';

export default function AddCarScreen4({navigation, route}) {
  const [kilometers, setKilometers] = useState('');
  const [seats, setSeats] = useState('');
  const [transmission, setTransmission] = useState('');
  const [fuelType, setFuelType] = useState(null);

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [moreImages, setMoreImages] = useState([]);
  const [active, setActive] = useState('');

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const bottomSheetRef = useRef();
  console.log(route.params);

  function openBottomSheet(currActive) {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.togglePanel();
    }
    setIsBottomSheetOpen(true);
    setActive(currActive);
  }

  async function openGallery() {
    const result = await launchImageLibrary({mediaType: 'photo'});
    console.log(result.assets[0].uri);
    if (active === 'front') {
      setFrontImage(result.assets[0].uri);
    } else if (active === 'back') {
      setBackImage(result.assets[0].uri);
    }
    else if(active === 'more'){
      setMoreImages(prev=>[...prev,result.assets[0].uri])
    }
    setIsBottomSheetOpen(false);
  }
  async function openCamera() {
    const result = await launchCamera({
      cameraType: 'back',
      mediaType: 'photo',
    });
    console.log(result);
    if (active === 'front') {
      setFrontImage(result.assets[0].uri);
    } else if (active === 'back') {
      setBackImage(result.assets[0].uri);
    }
    else if(active === 'more'){
      setMoreImages(prev=>[...prev,result.assets[0].uri])
    }
    setIsBottomSheetOpen(false);
  }
  const parent = useRef([ref1, ref2, ref3]);
  return (
    <>
      <View style={style.container}>
        <ScrollView>
          <Header />
          <AddCarHeader step={4} />

          <View style={style.innerContainer}>
            <CustomText style={style.headingtext}>Front Car</CustomText>
            <ImagePicker
              onPress={() => openBottomSheet('front')}
              image={frontImage}
            />
            <CustomText style={style.headingtext}>Front Car</CustomText>
            <ImagePicker
              onPress={() => openBottomSheet('back')}
              image={backImage}
            />
            <Pressable style={style.morePhotosButton} onPress={()=>openBottomSheet('more')}>
              <SvgXml xml={addIconGrey} height={20} width={20} />
              <CustomText style={style.addMoreText}>Add more photos</CustomText>
            </Pressable>
            <ScrollView horizontal={true} style={style.imagesContainer}>
              {moreImages.map(data=><Image source={{uri:data}} key={data} style={style.image}/>)}
            </ScrollView>
            <SubmitButton text={'Continue'} />
          </View>
        </ScrollView>
        {isBottomSheetOpen && (
          <BottomSheet
            wrapperStyle={style.wrapperVisible}
            ref={bottomSheetRef}
            onClose={() => setIsBottomSheetOpen(false)}>
            <Pressable
              style={style.pressableButton}
              onPress={() => openCamera()}>
              <CustomText style={style.pressableButtonText}>
                Open Camera
              </CustomText>
            </Pressable>
            <Pressable
              style={style.pressableButton}
              onPress={() => openGallery()}>
              <CustomText style={style.pressableButtonText}>
                Select From Gallery
              </CustomText>
            </Pressable>
          </BottomSheet>
        )}
      </View>
    </>
  );
}
