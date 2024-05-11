import axios from 'axios';
import { createContext } from 'react';
const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
export const UserContext = createContext(null)

const userService = {
    login: (user) => {
        return axios.get(`${API_URL}users/login`, user)
    },
    logout: () => {
        return axios.get(`${API_URL}users/logout`)
    },
    getUserActual: async ()=>{
        const response = await axios.get(`${API_URL}users/actual`)
        return response.data
    },
    getUserByid: async (idu) =>{
        const response = await axios.get(`${API_URL}users/${idu}`)
        return response.data
    },
    getAllUsers: async () =>{
        const response = await axios.get(`${API_URL}users/`)
        return response.data
    },
    createUser: async (user)=>{
        const response = await axios.post(`${API_URL}users/`,user)
        return response
    },
    updateUser: async (user)=>{
        const response = await axios.put(`${API_URL}users/`,user)
        return response
    },
    deleteUser: async ()=>{
        const response = await axios.delete(`${API_URL}users/`)
        return response
    }
}
export default userService