import {StyleSheet, Dimensions} from 'react-native';
import { scale } from 'react-native-size-matters';


export const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    padding:scale(15)
  
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: '10%',
  },
  image: {
    height: scale(350),
    width: scale(360),
    objectFit: 'cover',
  },
  textContainer: {
    width: '100%',
  },
  headingText: {
    paddingHorizontal: 15,
    marginTop: 70,
    fontSize: 25,
    fontWeight: '500',
    color: '#192252',
  },
  textParagraph: {
    marginTop: 25,
    paddingHorizontal:15,
    lineHeight: 25,
    fontSize: 15,
    opacity: 0.6,
  },
 
});
