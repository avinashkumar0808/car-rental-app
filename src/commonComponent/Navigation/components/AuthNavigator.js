import {createStackNavigator} from '@react-navigation/stack';

import {Screen_Routes} from '../../../../utils/constants/Routes';
import IntroScreen from '../../../screens/IntroScreen';
import Login from '../../../screens/Login';
import Header from '../../Header';
import Register from '../../../screens/Register';
import OTPVerify from '../../../screens/OTPVerify';

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={Screen_Routes.Intro} component={IntroScreen} />
      <AuthStack.Screen
        name={Screen_Routes.Login}
        component={Login}
        options={{
          header: () => <Header />,
          headerShown: true,
        }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{
          header: ()=><Header />,
          headerShown: true,
        }}
      />
       <AuthStack.Screen
        name="Verify"
        component={OTPVerify}
        options={{
          header: ()=><Header />,
          headerShown: true,
        }}
        />
    </AuthStack.Navigator>
  );
}
