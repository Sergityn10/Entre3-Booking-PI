import axios from 'axios'
import { constComunes } from './constantesComunes'
//const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
//const API_URL = "http://localhost:8080/Booking_entrega2/rest/"

const API_URL = constComunes.URLAPI
const path = "booksAccoms"
const bookingAccommodationsService = {
    getBookingAccommodationsByIdb: async (idb) => {
        const response = await axios.get(`${API_URL}${path}/book/${idb}`)
        return response.data
    },
    getBookingAccommodationByIda: async (ida)=>{
        const response = await axios.get(`${API_URL}${path}/accom/${ida}`)
        return response.data
    },
    createBookingAccommodation: async (reserva)=>{
        const response = await axios.post(`${API_URL}${path}`, reserva)
        return response
    },
    updateBookingAccommodation: async (reserva) => {
        const response = await axios.put(`${API_URL}${path}`, reserva)
        return response
    },
    deleteBookingAccommodation: async (idb,ida) => {
        const response = await axios.delete(`${API_URL}${path}/book/${idb}/accom/${ida}`)
        return response
    }
}
export default bookingAccommodationsService