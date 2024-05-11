import { useState } from "react"
import React from "react"
import { MyProperty } from "./MyProperty"
import './../../css/style-reservas.css'

export function ListOwnProperties({listOwnProperties}){
    return (
        <>
            {listProperties.map( (property) => <MyProperty alojamiento={property}/>)}
            
        </>
    )
}