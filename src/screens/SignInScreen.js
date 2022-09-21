import React, {useState} from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { STORE_NUMBER } from "../constants/constants";
//import { useDispatch } from 'react-redux';

import Styles from '../styles/ProjectStyles';
import PrimaryButton from '../components/PrimaryButton';
import constants from '../constants/Images';

const SignInScreen =(props) => {
    //const dispatch = useDispatch();
    const [textInputName, setTextInputName] = useState('');
    const [textInputPassword, setTextInputPassword] = useState('');

    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!textInputName.trim()) {
          alert('Please Enter Name');
          return;
        }
        //Check for the Email TextInput
        if (!textInputPassword.trim()) {
          alert('Please Enter Your Password');
          return;
        }
        //Check for the Password Length
        if(textInputPassword.length < 8){
            console.log("Check length===>",textInputPassword.length);
          alert('Password Should be Atleast 8 Characters Long');
          return;
        }
        props.navigation.navigate('MyHomeScreen')
    };

    return(
        <SafeAreaView style={{height:'100%'}}>
            <StatusBar hidden></StatusBar>
            <Image style={{width:'100%', height:250}}
                source={constants.SignInHeader}></Image>
            <TextInput style={Styles.textSheet} 
                placeholder='Enter User Name' 
                onChangeText={
                    (value) => setTextInputName(value)
                }
                placeholderTextColor='#d3d3d3'>
            </TextInput>
            
            <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}></View>
            <TextInput style={Styles.textPasswordSheet} 
                placeholder='Enter Password' 
                onChangeText={
                    (value) => setTextInputPassword(value)
                }
                placeholderTextColor='#d3d3d3'>
            </TextInput>

            <PrimaryButton bgColor='#7F23D9'
                onClick={()=>{
                    //Creating action object
                    // const action ={
                    //     type: STORE_NUMBER,
                    //     payload: 20
                    // };
                    // dispatch(action);
                    checkTextInput()
                }}
                label='Sign In'
            />
            
            <View style={{ flexDirection: 'row',justifyContent: 'flex-end', margin:20}}>
                <Text style={{color:'#7F23D9',fontSize:18,fontWeight:'medium'}} onPress={()=>{
                    props.navigation.navigate('MyforgotPasswordScreen')
                }}>
                Forgot Password?
                </Text>
            </View>
            <View style={Styles.bottomViewSheet}>
                <Text>
                    Don't Have Account?
                </Text>
                <Text style={Styles.bottomTextSheet} 
                onPress={()=>{
                    props.navigation.navigate('MySignUpScreen')
                }}>Sign Up
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default SignInScreen;