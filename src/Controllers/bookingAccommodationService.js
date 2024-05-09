import axios from 'axios'
const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
const bookingAccommodationsService = {
    getBookingAccommodationsByIdb: async (idb) => {
        const response = await axios.get(`${API_URL}booksAccoms/book/${idb}`)
        return response.data
    },
    getBookingAccommodationByIda: async (ida)=>{
        const response = await axios.get(`${API_URL}booksAccoms/accom/${ida}`)
        return response.data
    },
    createBookingAccommodation: async (reserva)=>{
        const response = await axios.post(`${API_URL}booksAccoms`, reserva)
        return response
    },
    updateBookingAccommodation: async (reserva) => {
        const response = await axios.put(`${API_URL}booksAccoms`, reserva)
        return response
    },
    deleteBookingAccommodation: async (idb,ida) => {
        const response = await axios.delete(`${API_URL}booksAccoms/book/${idb}/accom/${ida}`)
        return response
    }
}
export default bookingAccommodationsService