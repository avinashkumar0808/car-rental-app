import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeComponent from './components/HomeComponent';
import { Screen_Routes } from '../../../utils/constants/Routes';
const BottomTabNavigator = createBottomTabNavigator();
export default function Home(){
  return (
    <BottomTabNavigator.Navigator screenOptions={{headerShown:false}}>
      <BottomTabNavigator.Screen component={HomeComponent} name={Screen_Routes.Home}/>
    </BottomTabNavigator.Navigator>
  )
}