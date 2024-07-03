import { useState } from "react"
import React from "react"
import { UserFavorite } from "./UserFavorite"
// import './../../css/style-reservas.css'

export function ListFavorites({listUserFavorites}){
    return (
        <>
            {listUserFavorites.map( (favorito, index) => <UserFavorite key={index} favorito={favorito}/>)}
    
        </>

    )
}