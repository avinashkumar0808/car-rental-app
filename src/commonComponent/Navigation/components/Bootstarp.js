import { StackActions } from "@react-navigation/native";
import { Screen_Routes } from "../../../../utils/constants/Routes";

export default function Bootstrap({user, navigation}){
if(!user){
navigation.dispatch(StackActions.replace(Screen_Routes.AuthNavigator))
}
else{
  navigation.dispatch(StackActions.replace(Screen_Routes.MainNavigator))
}
}