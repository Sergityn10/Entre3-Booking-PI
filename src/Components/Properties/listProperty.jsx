import { useState } from "react"
import React from "react"
import { CardProperty } from "./CardProperty"
import './../../css/listaAlojamientos.css'
export function ListProperty({listProperties}){
    
    return (
        <ul>
            {listProperties.map( (property) => <CardProperty alojamiento={property}/>)}
            
        </ul>
    )
}