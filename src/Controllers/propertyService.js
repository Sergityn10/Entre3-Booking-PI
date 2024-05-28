import axios, { formToJSON } from 'axios'

//CAMBIAR PARA DESACTIVAR SSL
const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
//const API_URL = "http://localhost:8080/Booking_entrega2/rest/"


const propertyService = {
    getAllProperties: async () => {
        const response = await axios.get(`${API_URL}properties`);
        return response.data;
    },
    getProperty: async (idp)=>{
        const response = await axios.get(`${API_URL}properties/${idp}`);
        return response;
    },
    getAllbyUser: async (idu) => {
        const response = await axios.get(`${API_URL}properties/user/${idu}`);
        return response.data;
    },
    getByName: async (query) =>{
        const response = await axios.get(`${API_URL}properties/search${query}`);
        return response.data;
    },
    createProperty: async (property) =>{
        const response = await axios.post(`${API_URL}properties`, property);
        return response.data;
    },
    updateProperty: async (property) =>{
        const response = await axios.put(`${API_URL}properties`, property);
        return response.data;
    },
    deleteProperty: async (idp) =>{
        const response = await axios.delete(`${API_URL}properties/${idp}`);
        return response;
    }
}
export default propertyService