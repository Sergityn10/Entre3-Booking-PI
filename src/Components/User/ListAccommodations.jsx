import React from "react"

import { AccommodationCard } from "./AccommodationCard"
import './../../css/style-reservas.css'

export function ListAccommodations({listPropertyAccomodations}){
    return (
        <>
            {listPropertyAccomodations.map( (accommodation) => 
                <AccommodationCard habitacion={accommodation}/>
            )}
            
        </>
    )
}

