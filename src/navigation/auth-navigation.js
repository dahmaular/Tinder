/* eslint-disable prettier/prettier */
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Signup from '../screens/Authentication/Register';
import Login from '../screens/Authentication/Login';
import ConfirmRegister from '../screens/Authentication/Confirm-Signup';

const Stack = createStackNavigator();

export const AuthNav = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Signup} />
      <Stack.Screen name="Confirm-signUp" component={ConfirmRegister} />
    </Stack.Navigator>
  );
};
