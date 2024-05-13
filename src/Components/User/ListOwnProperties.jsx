import { useState } from "react"
import React from "react"
import { MyProperty } from "./MyProperty"
import './../../css/style-reservas.css'

export function ListOwnProperties({listOwnProperties}){
    return (
        <>
            {listOwnProperties.map( (property) => <MyProperty alojamiento={property}/>)}
            
        </>
    )
}