import React from "react";
import { Text, TouchableOpacity } from "react-native";


const PrimaryButton = (props)=>{
    return(
        <TouchableOpacity style={{
            padding: 10,
            backgroundColor:props.bgColor,
            marginStart: 44,
            marginTop:24,
            marginEnd:20, 
            width: 350,
            height:54,
            alignItems:'center',
            justifyContent:'center',
            borderRadius: 12}} 
            activeOpacity = {1}
            onPress={props.onClick}>
            <Text
                style={{color:'#ffffff', textAlign: 'center', fontWeight: 'bold'}}>
                {props.label}   
            </Text>
        </TouchableOpacity>
    );
}

export default PrimaryButton;