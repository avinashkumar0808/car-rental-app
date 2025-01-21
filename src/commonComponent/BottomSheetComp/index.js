import BottomSheet from 'react-native-simple-bottom-sheet';
import {View, ScrollView, Text,TouchableOpacity, StyleSheet} from 'react-native';
import { useRef } from 'react';
import { scale } from 'react-native-size-matters';


function BottomSheetComp() {
  const panelRef = useRef(null);

  return (
   <View style={style.container}>
    <Text onPress={()=>panelRef.current.togglePanel()}>Testing</Text>
     <BottomSheet ref={panelRef} wrapperStyle={style.wrappableStyle} >
     <Text>hello</Text>
    </BottomSheet>
   </View>
  
  );
}
export default BottomSheetComp;

const style = StyleSheet.create({
container:{
  backgroundColor:'red',
flex:1
  
}, 
wrappableStyle:{
  height:100
}
})