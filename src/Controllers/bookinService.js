import axios from 'axios'
const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
const bookingService = {
    getBookings: async () => {
        const response = await axios.get(`${API_URL}books`)
        return response.data
    },
    getBookByIdb: async (idb) => {
        const response = await axios.get(`${API_URL}books/${idb}`)
        return response.data
    },
    createBook: async (book)=>{
        const response = await axios.post(`${API_URL}books`, book)
        return response
    },
    updateBook: async (book) =>{
        const response = await axios.put(`${API_URL}books`, book)
        return response
    },
    deleteBookByidb: async (idb) =>{
        const response = await axios.delete(`${API_URL}books/${idb}`)
        return response
    },
    deleteBookByJSON: async (book)=>{
        const response = await axios.delete(`${API_URL}books`, book)
        return response
    }
}
export default bookingService