import { ScrollView, Text } from "react-native";

import Header from "../../commonComponent/Header";
import { style } from "./style";

export default function AddCar(){

  return <>
  <ScrollView style={style.container}>
    <Header/>
    <Text>Add Car</Text>

  </ScrollView>
 
  </>
} 