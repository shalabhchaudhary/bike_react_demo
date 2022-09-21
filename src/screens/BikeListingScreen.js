import React,{useState, useEffect} from 'react';
import { Icon, ListItem, SearchBar } from "react-native-elements";
import axios from 'axios';

import {
    FlatList,
    Text,
    Button,
    TextInput,
    Image,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Modal
} from 'react-native';

import { GET_STATIONS, STORE_NUMBER } from "../constants/constants";
import { useDispatch } from 'react-redux';

import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from '../components/PrimaryButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Styles from '../styles/ProjectStyles';
import ImagesConstant from '../constants/Images';

import Api from '../services/Api';

const BikeListingScreen = (props) => {
    const dispatch = useDispatch();
    const URL = 'http://api.citybik.es/v2/networks';

    const [fetchResponse, setFetchResponse] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [search, setSearch] = useState('');
    const [companyName, setCompany] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() =>{
        callApiWithFetch()
    },[])

    const callApiWithFetch = ()=>{
        setModalVisible(true);
        fetch(URL).then((response) => response.json()).then((jsonResponse) => {
            setFetchResponse(jsonResponse.networks)
            setFilterData(jsonResponse.networks)

            console.log('Response ====>',filterData)
            console.log('ResponseCompany ====>',companyName)

            //Creating action object 
            const action ={
                type: GET_STATIONS,
                payload: jsonResponse.networks
            };
            //Dispatch action in redux
            dispatch(action);
            setModalVisible(false);
        })
        .catch((error) => {
            console.log('====>',error)
            setModalVisible(false);
        });
    }

    const Item = ({ item, onPress }) => (
        <TouchableOpacity onPress={onPress}>
           <View style={Styles.bikeListItemSheet}>
                <Image style={{width:"100%",height:120, borderTopLeftRadius:10,borderTopRightRadius:10}} 
                source={ImagesConstant.BikeDummyImg}></Image>
                <View style={{flex:1,width:'100%',flexDirection:'row',justifyContent : 'space-between'}}>
                            <Text style={{width:240,fontSize:20,fontWeight:'bold',marginStart:10,marginTop:20,color:'#9370db'}} 
                            multine={false} ellipsizeMode='tail' numberOfLines={1}>
                                {Array.isArray(item.company) ? item.company[0] : ''}: {item.name}</Text>
    
                            <View style={{height:40,flexDirection:'row',marginTop:24,marginEnd:10,justifyContent : 'center'}}>
                                <Image style={{width:20, height:20}} source={require('../images/location.png')}></Image>
                                <Text style={Styles.bikeLocationSheet}>
                                    {item.location.city}, {item.location.country}
                                </Text>
                            </View>
                        </View>
            </View>
        </TouchableOpacity>
    );
    
    const searchFilter = (text) =>{
        if(text){
            const newData = fetchResponse.filter((item) =>{
                const itemData = item.name ? item.name : '';
                const textData = text;

                return itemData.indexOf(textData) > -1;
            });
            setFilterData(newData);
            setSearch(text);
        } else {
            setFilterData(fetchResponse);
            setSearch(text);
        }
    }

    const constructItem=({item}) =>{
        return(
            <View>
                <Text styles={styles.itemStyle}>{item.title}</Text>
            </View>
        );
    }

    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        // const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => {
                const data = item.id;
                props.navigation.navigate('MyBikeDetailScreen',{info: data})
                console.log('id=====>>',item.id)
                item.id
            }}
          />
        );
    };

    return(
        <SafeAreaView style={{flexDirection:'column', backgroundColor:'#ffffff'}}>

            <View style={{ flexDirection:'row',alignItems:'center',height:40, backgroundColor:'#dcdcdc',
             borderRadius:12, margin:10}}>
                <Image style={{marginStart:20,width:20,height:20}} source={require('../images/search.png')}/>

                <TextInput style={{marginStart:10}} 
                placeholder='Are you looking for certain Bike ?' 
                value={search} onChangeText={(text) => searchFilter(text)}></TextInput>
            </View>

            <FlatList data={filterData} 
                        renderItem={ renderItem}>
            </FlatList>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                    <View style={{flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 22}}>
                        <View style={{margin: 20,
                            backgroundColor: "white",
                            borderRadius: 20,
                            padding: 35,
                            alignItems: "center",
                            shadowColor: "#000",
                            shadowOffset: {width: 0,height: 2},
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5}}>
                            <ActivityIndicator size="small" color="#0000ff"></ActivityIndicator>
                            <Text style={{marginBottom: 15,textAlign: "center"}}>Please wait...</Text>
                        </View>
                    </View>
            </Modal>

        </SafeAreaView>
    );
}

export default BikeListingScreen;