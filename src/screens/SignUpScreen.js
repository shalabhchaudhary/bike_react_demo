import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import Styles from '../styles/ProjectStyles';
//import {useSelector} from 'react-redux';

function SignUpScreen(props) {

    const [textInputName, setTextInputName] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');
    const [textInputPhoneNumber, setTextInputPhoneNumber] = useState('');
    const [textInputPassword, setTextInputPassword] = useState('');

   // const checkValue = useSelector((store) => store.counter);

   const checkTextInput = () => {
    //Check for the Name TextInput
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    //Check for the Email TextInput
    if (!textInputEmail.trim()) {
      alert('Please Enter Your Email');
      return;
    }
    //Check for the Phone Number TextInput
    if (!textInputPhoneNumber.trim()) {
      alert('Please Enter Your Phone Number');
      return;
    }
    //Check for the Phone Number Length
    if(textInputPhoneNumber.length<10){
      alert('Phone Number Should be of 10 digits');
      return;
    }
    //Check for the Password TextInput
    if (!textInputPassword.trim()) {
      alert('Please Enter Your Password');
      return;
    }
    //Check for the Password Length
    if(textInputPassword.length<8){
      alert('Password Should be Atleast 8 Characters Long');
      return;
    }
    props.navigation.navigate('MyHomeScreen')
  };

  return(
    <SafeAreaView style={{height:'100%'}}>
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold', margin:40}}>Welcome</Text>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={Styles.textTitleSheet}>Sign Up</Text>
        </View>
        <TextInput style={Styles.textSheet} 
            placeholder='Name' 
            onChangeText={
                (value) => setTextInputName(value)
            }
            placeholderTextColor='#d3d3d3'>
        </TextInput>
        
        <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}></View>
        <TextInput style={Styles.textPasswordSheet} 
            placeholder='Email' 
            onChangeText={
                (value) => setTextInputEmail(value)
              }
            placeholderTextColor='#d3d3d3' keyboardType="email-address">
        </TextInput>

        <View style={{justifyContent:'center',alignItems:'center'}}></View>
        <TextInput style={Styles.textPhoneNumberSheet} 
            placeholder='Mobile Number'
            onChangeText={
                (value) => setTextInputPhoneNumber(value)
              }
            placeholderTextColor='#d3d3d3'  keyboardType="number-pad">
        </TextInput>

        <View style={{justifyContent:'center',alignItems:'center'}}></View>
        <TextInput style={Styles.textPasswordSheet} 
            placeholder='Password' 
            onChangeText={
                (value) => setTextInputPassword(value)
              }
            placeholderTextColor='#d3d3d3'>
        </TextInput>

        <PrimaryButton
            bgColor='#7F23D9'
            onClick={()=>{
                checkTextInput();
            }}
            label='Sign Up'
        />
        
        <View style={Styles.bottomViewSheet}>
            <Text>
                Don't Have Account?
            </Text>
            <Text style={Styles.bottomTextSheet} onPress={()=>{
                props.navigation.navigate('MySignInScreen')
            }}>
            Sign In
            </Text>
        </View>
    </SafeAreaView>
);
}

export default SignUpScreen;