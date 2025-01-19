import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BottomTab from "../../commonComponent/BottomTab";

export default function Profile(){
  return <>
  <ScrollView>
    <Text>Profile</Text>
  </ScrollView>
  <BottomTab/>
  </>
}