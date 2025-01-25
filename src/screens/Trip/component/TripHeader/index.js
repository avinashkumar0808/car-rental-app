import { useCallback, useState } from "react";
import { ScrollView } from "react-native";

import { style } from "./style";
import CapsuleButton from "../../../../commonComponent/CapsuleButton";

export default function TripHeader({filter}){

 
  const [currActive, setCurrActive] = useState('All')
  return <ScrollView contentContainerStyle={style.container} horizontal={true} showsHorizontalScrollIndicator={false}>
<CapsuleButton text={'All'} active={currActive === 'All'} onPress={filter} setActive={setCurrActive}/>
<CapsuleButton text={'Ongoing'} active={currActive === 'Ongoing'} onPress={filter} setActive={setCurrActive}/>
<CapsuleButton text={'Completed'} active={currActive === 'Completed'} onPress={filter} setActive={setCurrActive}/>
<CapsuleButton text={'Cancelled'} active={currActive === 'Cancelled'} onPress={filter} setActive={setCurrActive}/>
  </ScrollView>
}