import {ImageBackground, Text} from 'react-native';


import { style } from './style.js';

export default function CarImage({image}) {

  return(
    <ImageBackground
      source={{uri:image}}
      style={style.container}>
     
    </ImageBackground>

  )
}
