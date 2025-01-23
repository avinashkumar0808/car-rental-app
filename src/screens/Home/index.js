import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import HomeComponent from './components/HomeComponent';
import {Screen_Routes} from '../../../utils/constants/Routes';
import Cars from '../Trip';
import AddCar from '../AddCar';
import Chat from '../Chat';
import Profile from '../Profile';

const BottomTabNavigator = createBottomTabNavigator();
const style = StyleSheet.create({
  tabBarStyle: {
    display: 'none',
  },
  iconStyle: {
    backgroundColor: 'red',
    marginVertical: scale(16),
  },
});
export default function Home() {
  
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: style.tabBarStyle,
        
      }}>
      <BottomTabNavigator.Screen
        component={HomeComponent}
        name={Screen_Routes.Home}
      />
      <BottomTabNavigator.Screen component={Cars} name={Screen_Routes.Car}/>
      <BottomTabNavigator.Screen component={Chat} name={Screen_Routes.Chat}/>
      <BottomTabNavigator.Screen component={Profile} name={Screen_Routes.Profile}/>
    </BottomTabNavigator.Navigator>
  );
}
