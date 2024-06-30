import { useEffect, useState } from "react"
import React from "react"
import { CardProperty } from "./CardProperty"
import favoritesService from "../../Controllers/favoritesService"
import './../../css/listaAlojamientos.css'
import UserContext from "../../context/UserContext"
import { useContext } from "react"
import FavoriteContext from "../../context/FavoriteContext"
export function ListProperty({listProperties, listFavorites, setFavorites}){
    
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    

    useEffect(()=>{
        if(user){
            favoritesService.getAllFavoritesByUser(user.id).then((response) => setFavorites(response))
        }
    },[])

    return (
        <ul>
            {listProperties.map( (property, index) => <CardProperty key= {index} alojamiento={property}/>)}
            
        </ul>
    )
}