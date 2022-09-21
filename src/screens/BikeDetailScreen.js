import React, {useState, useEffect} from 'react';
import {
    FlatList,
    Text,
    Image,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Modal
} from 'react-native';

import { SafeAreaView } from "react-native-safe-area-context";
import Styles from '../styles/ProjectStyles';

import ImagesConstant from '../constants/Images';
import constants from '../constants/constants';

import {useSelector} from 'react-redux';

const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
       <View style={Styles.bikeItemSheet}>
            <Image style={{width:120,height:110, borderTopLeftRadius:10,borderBottomLeftRadius:10}} 
            source={ImagesConstant.BikeStationImg}></Image>
            <View style={{flex:1}}>
                <Text style={Styles.bikeItemText} 
                multine={false} ellipsizeMode='tail' numberOfLines={1}>{item.name}</Text>
                
                <View style={{flexDirection:'row', marginTop:10}}>
                    <Image style={{marginStart:10,width:30,height:30}} 
                    source={ImagesConstant.BikeImg}></Image>
                    <Text style={Styles.bikeItemInfoSlotsTextSheet}>{item.empty_slots}</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:10}}>
                    <Image style={{marginStart:10,width:70,height:30}} 
                    source={ImagesConstant.BikeParkingImg}></Image>
                    <Text style={Styles.bikeItemInfoTextSheet}>{item.free_bikes}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

const BikeListingScreen =(props) =>{

    useEffect(() =>{
        callApiWithFetch()
    },[])

    //Here We are fetching details from Redux
    const bikeList = useSelector((store) => store);
    const checkValue = useSelector((store) => store.stations);

    const URL = 'http://api.citybik.es/v2/networks/';

    const [fetchResponse, setFetchResponse] = useState({});
    const [bikeName, name] = useState('');
    const [bikeLocation, location] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [emptySlots, setSlots] = useState('');
    const [freeBikes, setFreeBikes] = useState('');

    const getData = props.route.params.info;

    console.log('Dta====>>',checkValue,"shalabh", bikeList);

    const callApiWithFetch = ()=>{
        setModalVisible(true);
        fetch(URL+getData).then((response) => response.json())
        .then((jsonResponse) => {
            name(jsonResponse.network.name)
            location(jsonResponse.network.location.city+", "+jsonResponse.network.location.country) 
            setSlots(jsonResponse.network.location.city)
            setFetchResponse(jsonResponse.network.stations)
            console.log('Response ====>',jsonResponse)
            setModalVisible(false);
            
        })
        .catch((error) => {
            setModalVisible(false);
            console.log('====>',error)
        });
    }

    const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
            onPress={() => {
                console.log('id=====>>',item.id)
                item.id
            }}
          />
        );
    };

    return(
        <SafeAreaView style={{flex:1,flexDirection:'column', backgroundColor:'#ffffff'}}>
            <Image style={{width:"100%",height:180}} 
            source={ImagesConstant.BikeDummyImg}></Image>
            <View style={Styles.backgroundTopRoundSheet}>
                    <View style={{width:'100%',flexDirection:'row',justifyContent : 'space-between'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',
                        marginStart:10,marginTop:20,color:'#9370db'}}>{bikeName}</Text>

                        <View style={{height:40,flexDirection:'row',marginTop:20,marginEnd:10,justifyContent : 'center'}}>
                            <Image style={{width:20, height:20}} source={require('../images/location.png')}></Image>
                            <Text style={Styles.bikeLocationSheet}>
                                {bikeLocation}
                            </Text>
                        </View>
                    </View>
                    <Text style={{fontSize:20,fontWeight:'bold',marginStart:10,marginTop:10,color:'#000000'}}
                     multine={false} ellipsizeMode='tail' numberOfLines={1}
                     >Available Stations</Text>
                    <FlatList data={fetchResponse} 
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
                            <View style={Styles.modalViewSheet}>
                                <ActivityIndicator size="small" color="#0000ff"></ActivityIndicator>
                                <Text style={{marginBottom: 15,textAlign: "center"}}>Please wait...</Text>
                            </View>
                        </View>
                    </Modal>
            </View>
        </SafeAreaView>
    );
}

export default BikeListingScreen;