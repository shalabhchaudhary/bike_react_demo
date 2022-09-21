import {StyleSheet} from 'react-native';

const ProjectStyles = StyleSheet.create({
    textSheet:{
        fontSize: 18,
        marginStart: 44,
        opacity:10,
        marginEnd:20,
        backgroundColor:'#ffffff',
        marginTop: 34,
        borderRadius: 6,
        paddingStart:10
    },
    textPasswordSheet:{
        fontSize: 18,
        marginStart: 44,
        opacity:10,
        marginEnd:20,
        marginVertical:33,
        backgroundColor:'#ffffff',
        marginTop: 4,
        borderRadius: 6,
        paddingStart:10 
    },
    textPhoneNumberSheet:{
        fontSize: 18,
        marginStart: 44,
        opacity:10,
        marginEnd:20,
        marginVertical:33,
        backgroundColor:'#ffffff',
        marginTop: 4,
        borderRadius: 6,
        paddingStart:10 
    },
    textTitleSheet:{
        color:'#7F23D9',fontSize:30,fontWeight:'medium'
    },
    bottomViewSheet:{
        flexDirection:'row',
        position: 'absolute', //Here is the trick
        bottom: 20,start: 44
    },
    bottomTextSheet:{
        color:'#7F23D9',fontSize:14,fontWeight:'medium',marginStart:5
    },
    modalViewSheet:{
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    bikeItemSheet:{
        margin:10, 
        flexDirection:'row',
        backgroundColor:'#ffffff',
        borderRadius:10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3
    },
    bikeListItemSheet:{
        margin:10, 
        backgroundColor:'#ffffff',
        borderRadius:10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3
    },
    bikeItemText:{
        fontSize:20,fontWeight:'bold',marginStart:10,marginEnd:10,color:'#9370db'
    },
    bikeItemInfoImgSheet:{
        marginStart:10,width:30,height:30
    },
    bikeItemInfoSlotsTextSheet:{
        fontSize:20,fontWeight:'bold',marginStart:10,paddingStart:40
    },
    bikeItemInfoTextSheet:{
        fontSize:20,fontWeight:'bold',marginStart:10
    },
    backgroundTopRoundSheet:{
        flex: 1,
        flexDirection: 'column',
        width:'100%',
        height:'100%',
        backgroundColor:'#ffffff',
        borderTopLeftRadius:14,
        borderTopRightRadius:14,
        position:'absolute',
        top:160, 
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 5
    },
    bikeLocationSheet:{
        fontSize:14,
        fontWeight:'bold',
        marginStart:6,
        color:'#9370db',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    titleSheet:{
        color : '#000000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewSheet:{
        color : '#000000',
        marginStart:30,
        width: 20
    },
    borderedTextStyle:{
        fontSize: 18,
        marginStart: 44,
        marginEnd:20,
        marginTop: 4,
        borderColor: "#808080",
        borderWidth: 1,
        borderRadius: 6,
        paddingStart:10
    },
    itemContainer: {
        width: '100%',
        backgroundColor: '#707F0A',
        padding: 10,
        marginHorizontal: 16
    },
    itemStyle: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf:'center',
        marginVertical: 20
    },
});

export default ProjectStyles;