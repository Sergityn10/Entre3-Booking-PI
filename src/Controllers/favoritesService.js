import { constComunes } from "./constantesComunes"
import axios from "axios"
const path = "favorites"
const favoritesService = {
    getAllFavoritesByUser: async (idu)=>{
        
            const response = await axios.get(`${constComunes.URLAPI}${path}/user/${idu}`)
            return response.data
           
    },
    addFavorite: async (idu, idp)=>{
        const response = await axios.post(`${constComunes.URLAPI}${path}/user/${idu}/prop/${idp}`)
        return response.data
    },
    deleteFavorite: async (idu, idp)=>{
        const response = await axios.delete(`${constComunes.URLAPI}${path}/user/${idu}/prop/${idp}`)
        return response
        }

}
export default favoritesService;