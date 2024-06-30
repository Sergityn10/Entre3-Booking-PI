import axios from 'axios';
import { constComunes } from './constantesComunes';
//AXIOS se trata de una librería que te realiza las cabeceras hechas HTTP para las llamadas a nuestra API. Si no
//habría que utilizar el método fetch y realizar las cabeceras a mano, que se trata de un método más lioso.
import { createContext } from 'react';

//CAMBIAR PARA DESACTIVAR SSL
//const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
//const API_URL = "http://localhost:8080/Booking_entrega2/rest/"

const API_URL = constComunes.URLAPI
const path = "users"
const userService = {
    login: async (user) => {
        return await axios.post(`${API_URL}${path}/login`, user)
    },
    logout: async () => {
        return await axios.get(`${API_URL}${path}/logout`)
    },
    getUserByEmail: async (email)=>{
        return await axios.get(`${API_URL}${path}/email/${email}`)
    },
    getUserActual: async ()=>{
        
        return await axios.get(`${API_URL}${path}/actual`)
       
    },
    getUserByid: async (idu) =>{
        const response = await axios.get(`${API_URL}${path}/${idu}`)
        return response.data
    },
    getAllUsers: async () =>{
        const response = await axios.get(`${API_URL}${path}`)
        return response.data
    },
    createUser: async (user)=>{
        const response = await axios.post(`${API_URL}${path}`,user)
        return response
    },
    updateUser: async (user)=>{
        const response = await axios.put(`${API_URL}${path}`,user)
        return response
    },
    deleteUser: async (idu)=>{
        const response = await axios.delete(`${API_URL}${path}/${idu}`)
        return response
    },
    getLocalUserByCookie: async () =>{
        return  window.localStorage.getItem("LocalUser")
    }
}
export default userService 