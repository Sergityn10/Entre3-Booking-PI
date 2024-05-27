import { useState } from "react"
import React from "react"
import { MyProperty } from "./MyProperty"
import './../../css/style-reservas.css'

export function ListAccommodations({listPropertyAccomodations}){
   
    //El .map es como un forEach
    //El (property) es el objeto donde se quiere que se guarde cada iteración
    //Lamada al componente MyProerty pasando el parametro
   
    return (
        <>
            {listPropertyAccomodations.map( (accommodation) => 
                <MyProperty habitacion={accommodation}/>
            )}
            
        </>
    )
}

