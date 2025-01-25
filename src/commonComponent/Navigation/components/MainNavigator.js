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
import AddCar from '../../../screens/AddCar';
import AddCarScreen2 from '../../../screens/AddCar/Screen/AddCarScreen2';
import AddCarScreen3 from '../../../screens/AddCar/Screen/AddCarScreen3';
import AddCarScreen4 from '../../../screens/AddCar/Screen/AddCarScreen4';
import FinalAddCar from '../../../screens/FinalAddCar';
import SeeMore from '../../../screens/SeeMore';


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
      />
      <MainNavigatorStack.Screen
        name={Screen_Routes.FinalCheckout}
        component={FinalCheckout}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <MainNavigatorStack.Screen
        component={AddCar}
        name={Screen_Routes.Add}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <MainNavigatorStack.Screen
        component={AddCarScreen2}
        name={Screen_Routes.AddCarScreen2}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <MainNavigatorStack.Screen
        component={AddCarScreen3}
        name={Screen_Routes.AddCarScreen3}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <MainNavigatorStack.Screen
        component={AddCarScreen4}
        name={Screen_Routes.AddCarScreen4}
      />
      <MainNavigatorStack.Screen
        component={FinalAddCar}
        name={Screen_Routes.FinalAddCar}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <MainNavigatorStack.Screen
        component={SeeMore}
        name={Screen_Routes.MoreCars}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
       
      />
       
    </MainNavigatorStack.Navigator>
  );
}
