import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../../screens/Home';
import {Screen_Routes} from '../../../../utils/constants/Routes';
import PromoDetails from '../../../screens/PromoDetails';

const MainNavigatorStack = createStackNavigator();
export default function MainNavigator() {
  return (
    <MainNavigatorStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainNavigatorStack.Screen
        name={Screen_Routes.HomeNavigator}
        component={Home}
      />
      <MainNavigatorStack.Screen
        name={Screen_Routes.PromoDetails}
        component={PromoDetails}
      />
    </MainNavigatorStack.Navigator>
  );
}
