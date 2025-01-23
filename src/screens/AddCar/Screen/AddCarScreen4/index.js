import {Alert, Image, Pressable, ScrollView, View} from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import {useState, useRef, useEffect} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import firestore from '@react-native-firebase/firestore';
import {utils} from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import LottieView from 'lottie-react-native';

import {style} from './style';
import SubmitButton from '../../../../commonComponent/FormSubmitButton';
import Header from '../../../../commonComponent/Header';
import AddCarHeader from '../../components/AddCarHeader';
import CustomText from '../../../../commonComponent/CutstomText';
import ImagePickerComp from '../../../../commonComponent/ImagePicker';
import {SvgXml} from 'react-native-svg';
import {
  addIconGrey,
  cameraFlipIcon,
  crossIconWhite,
  torchOff,
  torchOn,
} from '../../../../../utils/constants/icons';
import Backdrop from '../../../../commonComponent/Backdrop';
import ImageShow from '../../../../commonComponent/ImageShow';
import { Screen_Routes } from '../../../../../utils/constants/Routes';

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
  const [deviceVal, setDeviceVal] = useState('back');
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cameraRef = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const bottomSheetRef = useRef();

  const device = useCameraDevice(deviceVal);

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
  function handleCameraChange() {
    if (deviceVal === 'front') {
      setDeviceVal('back');
    } else {
      setDeviceVal('front');
    }
  }
  function toggleTorch() {
    setIsFlashOn(prev => !prev);
  }
  function getFileName(val) {
    const arr = val.split('/');
    return arr[arr.length - 1];
  }
  async function uploadDataOnFirebase() {
    let frontImageURL, backImageURL, frontFileRef, backFileRef;
    let moreImagesRef = [];
    let moreImageURLList = [];
    if (frontImage && backImage) {
      setIsLoading(true);
      const folderRef = storage().ref().child('CarRentalCarImages/');
      frontFileRef = folderRef.child(getFileName(frontImage));
      backFileRef = folderRef.child(getFileName(backImage));
      await frontFileRef.putFile(frontImage);
      await backFileRef.putFile(backImage);
      frontImageURL = await frontFileRef.getDownloadURL();
      backImageURL = await backFileRef.getDownloadURL();

      console.log(frontImageURL);
      console.log(backImageURL);

      for (let i = 0; i < moreImages.length; i++) {
        if (moreImages[i]) {
          moreImagesRef[i] = folderRef.child(getFileName(moreImages[i]));
          await moreImagesRef[i].putFile(moreImages[i]);
        }
      }
      for (let i = 0; i < moreImagesRef.length; i++) {
        const url = await moreImagesRef[i].getDownloadURL();
        moreImageURLList[i] = url;
      }
      const carDetails = {
        ...route.params.car,
        frontImageURL,
        backImageURL,
        moreImageURLList,
      };
      await firestore().collection('carRentalCars').add({carDetails});
      setIsLoading(false);
      navigation.navigate(Screen_Routes.FinalAddCar)
    }
    else{
      Alert.alert('Image must be uploaded','Atleast upload front car and back car image',[{text:'OK'}])
    }
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
              torch={isFlashOn ? 'on' : 'off'}
            />
            <Pressable
              style={style.crosssIconContainer}
              onPress={() => {
                setIsCameraOpen(false);
                setIsBottomSheetOpen(false);
              }}>
              <SvgXml xml={crossIconWhite} height={30} width={30} />
            </Pressable>
            <View style={style.iconsContainer}>
              {deviceVal === 'back' ? (
                <Pressable
                  style={style.pressbaleIcon}
                  onPress={() => toggleTorch()}>
                  {isFlashOn ? (
                    <SvgXml xml={torchOn} height={30} width={30} />
                  ) : (
                    <SvgXml xml={torchOff} height={30} width={30} />
                  )}
                </Pressable>
              ) : (
                <Pressable style={style.pressbaleIconEmpty}></Pressable>
              )}
              <Pressable style={style.clickButton} onPress={handleClickPhoto}>
                <View style={style.clickButtonInnerComp}></View>
              </Pressable>

              <Pressable
                style={style.pressbaleIcon}
                onPress={() => {
                  handleCameraChange();
                }}>
                <SvgXml xml={cameraFlipIcon} height={30} width={30} />
              </Pressable>
            </View>
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
                  setImage={setFrontImage}
                />
                <CustomText style={style.headingtext}>Back Car</CustomText>
                <ImagePickerComp
                  onPress={() => openBottomSheet('back')}
                  image={backImage}
                  setImage={setBackImage}
                />
                <Pressable
                  style={style.morePhotosButton}
                  onPress={() => openBottomSheet('more')}>
                  <SvgXml xml={addIconGrey} height={24} width={24} />
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
                      <ImageShow
                        image={data}
                        fun={() => removeImageFromList(data)}
                        styleVal={style.imageContainer}
                        styleValInner={style.imageInnerContainer}
                        iconStyle={style.imageIconStyle}
                      />
                    </Pressable>
                  ))}
                </ScrollView>
                <SubmitButton
                  text={'Continue'}
                  onPress={uploadDataOnFirebase}
                />
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
      {isLoading && (
        <Backdrop>
          <LottieView
            source={require('../../../../../assets/loading.json')}
            autoPlay
            loop
            style={style.lottieAnimation}
          />
        </Backdrop>
      )}
    </>
  );
}
