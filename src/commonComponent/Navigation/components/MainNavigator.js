import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../../screens/Home';
import {Screen_Routes} from '../../../../utils/constants/Routes';
import PromoDetails from '../../../screens/PromoDetails';
import CarDetails from '../../../screens/CarDetails';
import AllReviews from '../../../screens/AllReviews';
import Header from '../../Header';
import Checkout from '../../../screens/Checkout';
import ProtectionPlans from '../../../screens/ProtectionPlans';
import FinalCheckout from '../../../screens/FinalCheckout';

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
      <MainNavigatorStack.Screen
        name={Screen_Routes.CarDetails}
        component={CarDetails}
      />
      <MainNavigatorStack.Screen
        name={Screen_Routes.AllReviews}
        component={AllReviews}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <MainNavigatorStack.Screen
        name={Screen_Routes.Checkout}
        component={Checkout}
        options={{
          headerShown: false,
          header: () => <Header />,
        }}
      />
      <MainNavigatorStack.Screen
        name={Screen_Routes.ProtectionPlans}
        component={ProtectionPlans}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <MainNavigatorStack.Screen
        name={Screen_Routes.FinalCheckout}
        component={FinalCheckout}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
    </MainNavigatorStack.Navigator>
  );
}
