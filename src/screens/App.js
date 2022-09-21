/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import numberReducer from '../redux/numberReducer';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ProfileScreen from './ProfileScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import HomeScreen from './HomeScreen';
import BikeDetailScreen from './BikeDetailScreen';
import WelcomeScreen from './WelcomeScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const myStore = createStore(numberReducer);

function App() {

  // useEffect(() =>{
  //   SplashScreen.hide();
  // },[])

  return (
    <Provider store={myStore}>
      <NavigationContainer>
              <Stack.Navigator initialRouteName='MyWelcomeScreen'>
              <Stack.Screen name='MyWelcomeScreen' component={WelcomeScreen} options={{headerShown:false}}/>  
              <Stack.Screen name='MySignInScreen' component={SignInScreen} options={{headerShown:false}}/>
              <Stack.Screen name='MySignUpScreen' component={SignUpScreen} options={{headerShown:false}}/>
              <Stack.Screen name='MyforgotPasswordScreen' component={ForgotPasswordScreen} options={{headerShown:false}}/>
              <Stack.Screen name='MyHomeScreen' component={HomeScreen} options={{headerShown:true}}/>
              <Stack.Screen name='MyBikeDetailScreen' component={BikeDetailScreen} options={{headerShown:true}}/>
              </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
};

export default App;
