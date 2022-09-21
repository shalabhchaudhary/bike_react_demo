import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { Button } from 'react-native-elements';

import PrimaryButton from '../components/PrimaryButton';

import Styles from '../styles/ProjectStyles';

import constants from '../constants/Images';

const WelcomeScreen =(props) => {
    return(
        <SafeAreaView style={{flex:2}}>
            <StatusBar hidden></StatusBar>
            <Image style={{width:'100%'}} source={constants.WelcomeBg}></Image>
            <View style={{flex: 1,bottom:50,
                flexDirection: 'column',width:'100%',height:'100%',
                 top:100,
                position:'absolute', shadowColor: '#000000',
                }}>

                <Text style={{fontSize:24,fontWeight:'bold',marginStart:20, color:'#ffffff'}}>Welcome to</Text>
                <Text style={{fontSize:30,fontWeight:'bold',marginStart:20,marginTop:30, color:'#ffffff',letterSpacing:4}}>Bikeaholic</Text>
                <Text style={{fontSize:30,fontWeight:'light',marginStart:20,marginTop:30, color:'#ffffff'}}>Happy to see you again</Text>
                <View  style={{
                flexDirection:'row',
                start:44,end:44,
                position: 'absolute', //Here is the trick
                bottom: 120}}>
                    <TouchableOpacity style={{
                        padding: 10,
                        backgroundColor:'#ffffff',
                        width: '100%',
                        height:54,
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius: 12}} 
                        activeOpacity = {1}
                        onPress={() =>{
                            props.navigation.navigate('MySignInScreen')
                        }}>
                            <Text
                                style={{color:'#000000', textAlign: 'center', fontWeight: 'bold'}}>Continue to the Application  
                            </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </SafeAreaView>
    );
}

export default WelcomeScreen;