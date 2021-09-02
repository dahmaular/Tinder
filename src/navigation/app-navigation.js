/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/HomeScreen';
import MatchesScreen from '../screens/MatchesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {RegisterScreen} from '../screens/registration/register';
import {AuthNav} from './auth-navigation';
import ConfirmRegister from '../screens/Authentication/Confirm-Signup';
import Signup from '../screens/Authentication/Register';

const Tab = createBottomTabNavigator();

const TabIcon = {
  Home: 'home',
  Likes: 'star',
  Profile: 'user',
  Chat: 'message1',
};

const createScreenOptions = ({route}) => {
  const iconName = TabIcon[route.name];
  return {
    tabBarIcon: ({size, color}) => (
      <AntDesign name={iconName} size={size} color={color} />
    ),
    headerShown: false,
  };
};

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: '#ADD8E6',
        inactiveTintColor: '#093000',
        showLabel: false,
      }}
      tabBarShowLabel={false}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Likes" component={Signup} />
      <Tab.Screen name="Chat" component={ConfirmRegister} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
