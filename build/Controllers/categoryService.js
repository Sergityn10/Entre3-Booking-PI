import axios from 'axios'
import { constComunes } from './constantesComunes'
//CAMBIAR PARA DESACTIVAR SSL
//const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
//const API_URL = "http://localhost:8080/Booking_entrega2/rest/"

const API_URL = constComunes.URLAPI
const path = "categories"

const categoryService = {
    getAllCategories: async () => {
        const response = await axios.get(`${API_URL}${path}`)
        return response.data
    },
    getCategoryById: async (id) => {
        const response = await axios.get(`${API_URL}${path}/${id}`)
        return response.data
    },
    createCategory: async (category) =>{
        const response = await axios.post(`${API_URL}${path}`, category)
        return response
    },
    updateCategory: async (category) =>{
        const response = await axios.put(`${API_URL}${path}`, category)
        return response
    },
    deleteCategory: async (id) =>{
        const response = await axios.delete(`${API_URL}${path}/${id}`)
        return response
    }

}
export default categoryService