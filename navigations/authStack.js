import React from 'react';
import AuthOption from '../screens/AuthScreens/AuthOption';
import AuthLogin from '../screens/AuthScreens/AuthLogin';
import AuthSignUp from '../screens/AuthScreens/AuthSignUp';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword';
import EnterNumber from '../screens/AuthScreens/EnterNumber';
import VerifyNumber from '../screens/AuthScreens/VerifyNumber';
import Onboarding from '../screens/Onboarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {isOnBoard} from '../components/slices/appSlice';

export default function AuthStack() {
  const Stack = createNativeStackNavigator();

  const firstTime = useSelector(isOnBoard);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleStyle: {fontFamily: 'Poppins-Medium', fontSize: 18},
          headerTitleAlign: 'center',
        }}>
        {firstTime && <Stack.Screen name="Onboard" component={Onboarding} />}
        <Stack.Screen name="AuthOption" component={AuthOption} />
        <Stack.Screen name="AuthLogin" component={AuthLogin} />
        <Stack.Screen name="AuthSignUp" component={AuthSignUp} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: true,
            title: 'Passwrod Recovery',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="EnterNumber"
          component={EnterNumber}
          options={{
            headerShown: true,
            title: 'Enter Number',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="VerifyNumber"
          component={VerifyNumber}
          options={{
            headerShown: true,
            title: 'Verify Number',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
