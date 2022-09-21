import axios from "axios";

const Api = {
    fetchBikeListing: async () =>{
        const response = await fetch('http://api.citybik.es/v2/networks');
        const jsonResponse = await response.json();
        return jsonResponse;
    },
    fetchBikeDetails: async (bike_id) =>{
        const response = await fetch(`http://api.citybik.es/v2/networks/${bike_id}`);
        const jsonResponse = await response.json();
        return jsonResponse;
    }
}

export default Api