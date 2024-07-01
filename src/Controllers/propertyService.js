import axios, { formToJSON } from 'axios'
import { constComunes } from './constantesComunes'


const API_URL = constComunes.URLAPI
const path = "properties"
const propertyService = {
    getAllProperties: async () => {
        const response = await axios.get(`${API_URL}${path}`);
        return response.data;
    },
    getProperty: async (idp)=>{
        const response = await axios.get(`${API_URL}${path}/${idp}`);
        return response.data;
    },
    getAllbyUser: async (idu) => {
        const response = await axios.get(`${API_URL}${path}/user/${idu}`);
        return response.data;
    },
    getByName: async (query) =>{
        const response = await axios.get(`${API_URL}${path}/search${query}`);
        return response.data;
    },
    changeDisponibility: async(property)=>{
        const response = await axios.put(`${API_URL}${path}/disp`, property);
        return response;
    }
    ,
    createProperty: async (property) =>{
        const response = await axios.post(`${API_URL}${path}`, property);
        return response.data;
    },
    updateProperty: async (property) =>{
        const response = await axios.put(`${API_URL}${path}`, property);
        return response.data;
    },
    deleteProperty: async (idp) =>{
        const response = await axios.delete(`${API_URL}${path}/property/${idp}`);
        return response;
    }
}
export default propertyService