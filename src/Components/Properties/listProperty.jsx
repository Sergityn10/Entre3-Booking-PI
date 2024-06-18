import { useEffect, useState } from "react"
import React from "react"
import { CardProperty } from "./CardProperty"
import favoritesService from "../../Controllers/favoritesService"
import './../../css/listaAlojamientos.css'
import UserContext from "../../context/UserContext"
import { useContext } from "react"
import FavoriteContext from "../../context/FavoriteContext"
export function ListProperty({listProperties}){
    const {listFavorites,setListFavorites} = useContext(FavoriteContext)
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    

    useEffect(()=>{
        if(user){
            favoritesService.getAllFavoritesByUser(user.id).then((response) => setListFavorites(response))
        }
    },[])

    return (
        <ul>
            {listProperties.map( (property, index) => <CardProperty key= {index} alojamiento={property}/>)}
            
        </ul>
    )
}