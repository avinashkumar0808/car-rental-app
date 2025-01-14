import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import AuthNavigator from './components/AuthNavigator';
import {Screen_Routes} from '../../../utils/constants/Routes';
import MainNavigator from './components/MainNavigator';

const AppStack = createStackNavigator();
export default function AppNavigator({user}) {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        {user && (
          <AppStack.Screen
            name={Screen_Routes.MainNavigator}
            component={MainNavigator}
          />
        )}
        {!user && (
          <AppStack.Screen
            name={Screen_Routes.AuthNavigator}
            component={AuthNavigator}
          />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
