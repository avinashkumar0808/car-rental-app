import { ScrollView } from "react-native-gesture-handler";

import { style } from "./style";
import TopCar from "./component/TopCar";
import { topCarData } from "../../../../../utils/constants/dummyData/topCarsData";


export default function TopCarsSwiper(){
  return <ScrollView horizontal={true} style={style.container}>
{
  topCarData.map((data,index)=>{
   return  <TopCar data={data} key={index}/>
  })
}
  </ScrollView>
}