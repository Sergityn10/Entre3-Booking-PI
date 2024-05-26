import axios from 'axios';
//AXIOS se trata de una librería que te realiza las cabeceras hechas HTTP para las llamadas a nuestra API. Si no
//habría que utilizar el método fetch y realizar las cabeceras a mano, que se trata de un método más lioso.
import { createContext } from 'react';

//CAMBIAR PARA DESACTIVAR SSL
const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
//const API_URL = "http://localhost:8080/Booking_entrega2/rest/"

export const UserContext = createContext(null)

const userService = {
    login: async (user) => {
            
        
        return await axios.post(`${API_URL}users/login`, user)
    },
    logout: async () => {
        return await axios.get(`${API_URL}users/logout`)
    },
    getUserByEmail: async (email)=>{
        return await axios.get(`${API_URL}users/email/${email}`)
    },
    getUserActual: async ()=>{
        
        return await axios.get(`${API_URL}users/actual`)
       
    },
    getUserByid: async (idu) =>{
        const response = await axios.get(`${API_URL}users/${idu}`)
        return response.data
    },
    getAllUsers: async () =>{
        const response = await axios.get(`${API_URL}users`)
        return response.data
    },
    createUser: async (user)=>{
        const response = await axios.post(`${API_URL}users`,user)
        return response
    },
    updateUser: async (user)=>{
        const response = await axios.put(`${API_URL}users`,user)
        return response
    },
    deleteUser: async ()=>{
        const response = await axios.delete(`${API_URL}users`)
        return response
    }
}
export default userService 