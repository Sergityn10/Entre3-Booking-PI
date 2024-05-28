import axios from 'axios'
<<<<<<< HEAD
const API_URL = "https://localhost:8443/Booking_entrega2/rest/"

=======

//CAMBIAR PARA DESACTIVAR SSL
//const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
const API_URL = "http://localhost:8080/Booking_entrega2/rest/"

const path = "favorites"
>>>>>>> b433155ca43cf38a9c8edb842440f93d2291a9f7
const accommodationService = {
    getAccommodations: async () => {
        const response = await axios.get(`${API_URL}accoms`)
        return response.data
    },
    getAccommodationsByIdp: async (idp) =>{
        const response = await axios.get(`${API_URL}accoms/props/${idp}`)
        return response.data
    },
    getAccommodationByIda: async (ida) =>{
        const response = await axios.get(`${API_URL}accoms/${ida}`)
        return response.data
    },
    createAccommodation: async (accommodation)=>{
        const response = await axios.post(`${API_URL}accoms`, accommodation)
        return response
    },
    updateAccommodation: async (accommodation) => {
        const response = await axios.put(`${API_URL}accoms`, accommodation)
        return response
    },
    deleteAccommodation: async (ida)=>{
        const response = await axios.delete(`${API_URL}accoms/${ida}`)
        return response
    }
}
export default accommodationService
