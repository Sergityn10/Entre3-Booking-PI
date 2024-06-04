import axios from 'axios'
import { constComunes } from './constantesComunes'
//CAMBIAR PARA DESACTIVAR SSL
//const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
//const API_URL = "http://localhost:8080/Booking_entrega2/rest/"

const API_URL = constComunes.URLAPI
const path = "accoms"
const accommodationService = {
    getAccommodations: async () => {
        const response = await axios.get(`${API_URL}${path}`)
        return response.data
    },
    getAccommodationsByIdp: async (idp) =>{
        const response = await axios.get(`${API_URL}${path}/props/${idp}`)
        return response.data
    },
    getAccommodationByIda: async (ida) =>{
        const response = await axios.get(`${API_URL}${path}/${ida}`)
        return response.data
    },
    createAccommodation: async (accommodation)=>{
        const response = await axios.post(`${API_URL}${path}`, accommodation)
        return response
    },
    updateAccommodation: async (accommodation) => {
        const response = await axios.put(`${API_URL}${path}`, accommodation)
        return response
    },
    deleteAccommodation: async (ida)=>{
        const response = await axios.delete(`${API_URL}${path}/${ida}`)
        return response
    }
}
export default accommodationService
