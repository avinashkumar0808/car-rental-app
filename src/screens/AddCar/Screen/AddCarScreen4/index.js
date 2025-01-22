import {Image, Pressable, ScrollView, View} from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import {useState, useRef} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

// import { utils } from '@react-native-firebase/app';
// import storage from '@react-native-firebase/storage';

import {style} from './style';
import SubmitButton from '../../../../commonComponent/FormSubmitButton';
import Header from '../../../../commonComponent/Header';
import AddCarHeader from '../../components/AddCarHeader';

import CustomText from '../../../../commonComponent/CutstomText';

import ImagePickerComp from '../../../../commonComponent/ImagePicker';
import {SvgXml} from 'react-native-svg';
import {
  addIconGrey,
  crossIconWhite,
} from '../../../../../utils/constants/icons';
import Backdrop from '../../../../commonComponent/Backdrop';
import ImageShow from './component/ImageShow';

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
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const [backdropImage, setBackdropImage] = useState(null);

  const cameraRef = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const bottomSheetRef = useRef();

  const device = useCameraDevice('back');

  async function handleClickPhoto(data) {
    const photo = await cameraRef.current.takePhoto();
    if (active === 'front') {
      setFrontImage(`file://${photo.path}`);
    } else if (active === 'back') {
      setBackImage(`file://${photo.path}`);
    } else if (active === 'more') {
      setMoreImages(prev => [...prev, `file://${photo.path}`]);
    }
    setIsCameraOpen(false);
    setIsBottomSheetOpen(false);
  }
  function removeImageFromList(data) {
    setMoreImages(prev => prev.filter(image => image !== data));
  }
  function hideBackdrop() {
    setIsBackdropOpen(false);
  }
  function handleClickOnPhoto(data) {
    setIsBackdropOpen(true);
    setBackdropImage(data);
  }

  function openBottomSheet(currActive) {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.togglePanel();
    }
    setIsBottomSheetOpen(true);
    setActive(currActive);
  }

  async function openGallery() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(result => {
      if (active === 'front') {
        setFrontImage(result.path);
      } else if (active === 'back') {
        setBackImage(result.path);
      } else if (active === 'more') {
        setMoreImages(prev => [...prev, result.path]);
      }
      setIsBottomSheetOpen(false);
    });

    setIsBottomSheetOpen(false);
  }
  async function openCamera() {
    setIsCameraOpen(true);
  }
  const parent = useRef([ref1, ref2, ref3]);
  return (
    <>
      {isCameraOpen ? (
        device && (
          <View style={style.cameraContainer}>
            <Camera
              style={style.camera}
              isActive
              device={device}
              ref={cameraRef}
              photo
              photoQualityBalance="speed"
            />
            <Pressable
              style={style.clickButton}
              onPress={handleClickPhoto}></Pressable>
          </View>
        )
      ) : (
        <>
          <Header />
          <View style={style.container}>
            <ScrollView>
              <AddCarHeader step={4} />

              <View style={style.innerContainer}>
                <CustomText style={style.headingtext}>Front Car</CustomText>
                <ImagePickerComp
                  onPress={() => openBottomSheet('front')}
                  image={frontImage}
                />
                <CustomText style={style.headingtext}>Back Car</CustomText>
                <ImagePickerComp
                  onPress={() => openBottomSheet('back')}
                  image={backImage}
                />
                <Pressable
                  style={style.morePhotosButton}
                  onPress={() => openBottomSheet('more')}>
                  <SvgXml xml={addIconGrey} height={20} width={20} />
                  <CustomText style={style.addMoreText}>
                    Add more photos
                  </CustomText>
                </Pressable>
                <ScrollView horizontal={true} style={style.imagesContainer}>
                  {moreImages.map(data => (
                    <Pressable
                      key={data}
                      onPress={() => handleClickOnPhoto(data)}
                      style={style.imagePressable}>
                      <SvgXml
                        xml={crossIconWhite}
                        height={25}
                        width={25}
                        style={style.icon}
                        onPress={() => removeImageFromList(data)}
                      />
                      <Image source={{uri: data}} style={style.image} />
                    </Pressable>
                  ))}
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
          {isBackdropOpen && (
            <Backdrop>
              <ImageShow image={backdropImage} fun={hideBackdrop} />
            </Backdrop>
          )}
        </>
      )}
    </>
  );
}
