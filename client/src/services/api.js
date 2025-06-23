import axios from 'axios';

const API_URL = 'http://localhost:8000'

export const uploadFile = async (data) => {
    try {
        //API call
        let response = await axios.post(`${API_URL}/upload`, data)
        //upload: endpoint
        //asynchronous axios returns a Promise
        return response.data;
    }
    catch (error) {
        console.error("Error while calling the api: \n", error.message);
    }
}