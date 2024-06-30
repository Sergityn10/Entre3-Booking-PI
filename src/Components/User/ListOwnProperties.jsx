import { useState } from "react"
import React from "react"
import { MyProperty } from "./MyProperty"
import './../../css/style-reservas.css'

export function ListOwnProperties({listOwnProperties}){
   
    //El .map es como un forEach
    //El (property) es el objeto donde se quiere que se guarde cada iteración
    //Lamada al componente MyProerty pasando el parametro
   
    return (
        <>
            {listOwnProperties.map( (property, index) => 
                <MyProperty key={index} alojamiento={property}/>
            )}
            
        </>
    )
}

