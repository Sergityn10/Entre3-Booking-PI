import axios from 'axios'

//CAMBIAR PARA DESACTIVAR SSL
//const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
const API_URL = "http://localhost:8080/Booking_entrega2/rest/"

const categoryService = {
    getAllCategories: async () => {
        const response = await axios.get(`${API_URL}categories`)
        return response.data
    },
    getCategoryById: async (id) => {
        const response = await axios.get(`${API_URL}categories/${id}`)
        return response.data
    },
    createCategory: async (category) =>{
        const response = await axios.post(`${API_URL}categories`, category)
        return response
    },
    updateCategory: async (category) =>{
        const response = await axios.put(`${API_URL}categories`, category)
        return response
    },
    deleteCategory: async (id) =>{
        const response = await axios.delete(`${API_URL}categories/${id}`)
        return response
    }

}
export default categoryService