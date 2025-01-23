import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../../../../utils/constants/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    paddingHorizontal: scale(15),
  },
  headingtext: {
    fontSize: scale(16),
    color: colors.darkBlue,
    fontWeight: 700,
  },
  morePhotosButton: {
    paddingHorizontal: scale(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(3),
    borderWidth: scale(0.5),
    paddingVertical: scale(15),
    borderColor: colors.lightGray,
    borderRadius: scale(15),
    marginVertical: scale(15),
  },
  addMoreText: {
    color: colors.lightGray,
  },
  wrapper: {
    display: 'none',
  },
  wrapperVisible: {
    display: 'flex',
    height:200,
  },
  pressableButton: {
    paddingVertical: scale(10),
  },
  pressableButtonText: {
    textAlign: 'center',
    fontSize: scale(15),
  },
  imagesContainer: {
    height: scale(120),
    paddingVertical: scale(10),
    marginVertical: scale(5),
  },
  imagePressable: {
    width: scale(100),
    height: scale(100),
    marginHorizontal: scale(5),
    borderRadius: scale(5), 
    overflow: 'hidden',

  },
  imageContainer: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(5),
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: scale(3),
    zIndex: 1000,
  },
  cameraContainer: {
    flex: 1,
    position: 'relative',
  },
  camera: {
    flex: 1,
  },
  clickButton: {
    height: scale(60),
    width: scale(60),
    backgroundColor: colors.white,
    borderRadius: '100%',
   
    alignItems:'center',
    justifyContent:'center'
  },
  iconsContainer:{
    position: 'absolute',
    bottom: scale(10),
      width:'100%',
    backgroundColor:'transparent',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    gap:scale(25),
    paddingHorizontal:scale(15),
  },
  clickButtonInnerComp:{
  height:scale(56),
  width:scale(56),
  borderRadius:scale(28),
  borderWidth:scale(2),
  borderColor:'black',
 
  },
  imageInnerContainer:{
    height:scale(45),
  }, 

  pressbaleIcon:{
height:scale(40),
width:scale(40),
borderRadius:scale(25),
backgroundColor:'#282A2C',
 alignItems:'center',
  justifyContent:'center'
  },
  pressbaleIconEmpty:{
    height:scale(40),
width:scale(40),
  },
 
  crosssIconContainer:{
    height:scale(44),
    width:scale(44),
    position:'absolute',
    top:scale(5),
    right:scale(0),
  },
  lottieAnimation:{
    height:scale(80),
    width:scale(80),
  },
  imageIconStyle:{
    position:'absolute',
    top:5,
    right:5,
  },
});
