import { GET_STATIONS, STORE_NUMBER } from "../constants/constants";

// const initialState = {
//     bikes:[],
//     stations:[]
// };

const initialState = {
    counter:0,
    stations:[]
};

function numberReducer(state = initialState, action){
    console.log("Check Reducer ===>>", state, "action", action.type);
    switch(action.type){
        case GET_STATIONS:
            return {...state, stations: action.payload};
        case STORE_NUMBER:
            return {...state, counter: action.payload};
        default:
                return state;
    }
}

export default numberReducer;
