import React,{useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    Image,
  } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import SignUpScreen from "./SignUpScreen";
import ProfileScreen from "./ProfileScreen";
import WelcomeScreen from "./SignInScreen";
import BookmarkScreen from "./BookmarkScreen";
import NotificationScreen from './NotificationScreen';
import BikeListingScreen from "./BikeListingScreen";

//const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return(
      //<SafeAreaView>
        <Tab.Navigator screenOptions={{tabBarHideOnKeyboard: true}}>
          <Tab.Screen name='Bike Listing' component={BikeListingScreen} 
          options={({route}) =>({
            tabBarActiveTintColor:'#9370db',
            tabBarIcon: () =>{
                return <Image style={{width:20,height:20}} source={require('../images/home.png')}/>
            }
          })}/>
          <Tab.Screen name='Bookmark' component={BookmarkScreen} 
          options={({route}) =>({
            tabBarActiveTintColor:'#9370db',
            tabBarIcon:()=>{
                return <Image style={{width:20,height:20}} source={require('../images/bookmark.png')}/>
            } 
          })}/>
          <Tab.Screen name='Notification' component={NotificationScreen} 
          options={({route}) =>({
            tabBarBadge:0,
            tabBarIcon :()=>{
                return <Image style={{width:20,height:20}} source={require('../images/bell.png')}/>
            }
          })}/>
          <Tab.Screen name='Profile' component={ProfileScreen} 
          options={({route}) =>({
            tabBarIcon:()=>{
                return <Image style={{width:20,height:20}} source={require('../images/user.png')}/>
            }
          })}/>
        </Tab.Navigator>
      //</SafeAreaView>
        
    );
}

export default HomeScreen;