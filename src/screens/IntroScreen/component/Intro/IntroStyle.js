import {StyleSheet, Dimensions} from 'react-native';
console.log(Dimensions.get('window'));
export const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: '10%',
  },
  image: {
    height: 350,
    width: 360,
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
