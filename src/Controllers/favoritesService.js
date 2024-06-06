import { constComunes } from "./constantesComunes"
import axios from "axios"
const API_URL = constComunes.URLAPI
const path = "favorites"
const favoritesService = {
    getAllFavoritesByUser: async (idu)=>{
        
            const response = await axios.get(`${API_URL}${path}/user/${idu}`)
            return response.data
           
    },
    addFavorite: async (idu, idp)=>{
        const response = await axios.post(`${API_URL}${path}/user/${idu}/prop/${idp}`)
        return response.data
    },
    deleteFavorite: async (idu, idp)=>{
        const response = await axios.delete(`${API_URL}${path}/user/${idu}/prop/${idp}`)
        return response
        }

}
export default favoritesService;