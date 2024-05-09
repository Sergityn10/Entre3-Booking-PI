import { useState } from "react"
import { CardProperty } from "./CardProperty"
export function ListProperty({listProperties}){
    
    return (
        <>
            {listProperties.map( (property) => <CardProperty alojamiento={property}/>)}
            
        </>
    )
}