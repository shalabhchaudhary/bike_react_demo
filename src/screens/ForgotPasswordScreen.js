import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import Styles from '../styles/ProjectStyles';

function ForgotPasswordScreen(props) {
    const [textInputPhoneNumber, setTextInputPhoneNumber] = useState('');
    const checkTextInput = () => {
        //Check for the Phone Number TextInput
        if (!textInputPhoneNumber.trim()) {
          alert('Please Enter Your Phone Number');
          return;
        }
        //Check for the Phone Number Length
        if(!textInputPhoneNumber.length<10){
          alert('Phone Number Should be of 10 digits');
          return;
        }
        props.navigation.navigate('MySignInScreen')
    };
  return(
    <SafeAreaView style={{height:'100%'}}>
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold', margin:40}}>Let's Get You</Text>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:40}}>
          <Text style={Styles.textTitleSheet}>Forgot</Text>
        </View>
        <TextInput style={Styles.textSheet} 
            placeholder='Phone Number' 
            onChangeText={
                (value) => setTextInputPhoneNumber(value)
              }
            placeholderTextColor='#d3d3d3' keyboardType="number-pad">
        </TextInput>

        <PrimaryButton
            bgColor='#7F23D9'
            onClick={()=>{
                checkTextInput();
            }}
            label='Reset'
        />
        
        <View style={{ flexDirection: 'row',justifyContent: 'flex-end', margin:20}}>
            <Text style={{color:'#999997',fontSize:15,fontWeight:'medium'}}>
                Back to Login
            </Text>
            <Text style={{color:'#7F23D9',fontSize:15,fontWeight:'medium',marginStart:5}} onPress={()=>{
                props.navigation.navigate('MySignInScreen')
            }}>
            Sign In
            </Text>
        </View>
    </SafeAreaView>
);
}

export default ForgotPasswordScreen;