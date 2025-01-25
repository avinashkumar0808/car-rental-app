import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import HomeComponent from './components/HomeComponent';
import {Screen_Routes} from '../../../utils/constants/Routes';
import Chat from '../Chat';
import Profile from '../Profile';
import Trip from '../Trip';

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
      <BottomTabNavigator.Screen component={Trip} name={Screen_Routes.Trip}/>
      <BottomTabNavigator.Screen component={Chat} name={Screen_Routes.Chat}/>
      <BottomTabNavigator.Screen component={Profile} name={Screen_Routes.Profile}/>
    </BottomTabNavigator.Navigator>
  );
}
