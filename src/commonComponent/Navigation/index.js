import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IntroPage from '../../screens/IntroScreen';
import AuthNavigator from './components/AuthNavigator';
import {Screen_Routes} from '../../../utils/constants/Routes';

const AppStack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen
          name={Screen_Routes.AuthNavigator}
          component={AuthNavigator}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
