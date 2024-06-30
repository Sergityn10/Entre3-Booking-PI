import axios from 'axios'
import { constComunes } from './constantesComunes'
//const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
//const API_URL = "http://localhost:8080/Booking_entrega2/rest/"

const API_URL = constComunes.URLAPI
const path = "books"
const bookingService = {
    getBookingsByIdu: async (idu) => {
        const response = await axios.get(`${API_URL}${path}/user/${idu}`)
        return response.data
    },
    getBookByIdb: async (idb) => {
        const response = await axios.get(`${API_URL}${path}/${idb}`)
        return response.data
    },
    createBook: async (book)=>{
        const response = await axios.post(`${API_URL}${path}`, book)
        return response
    },
    updateBook: async (book) =>{
        const response = await axios.put(`${API_URL}${path}`, book)
        return response
    },
    deleteBookByidb: async (idb) =>{
        const response = await axios.delete(`${API_URL}${path}/${idb}`)
        return response
    },
    deleteBookByJSON: async (book)=>{
        const response = await axios.delete(`${API_URL}${path}`, book)
        return response
    }
}
export default bookingService