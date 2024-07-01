import { useState } from "react"
import React from "react"
import { MyProperty } from "./MyProperty"
import './../../css/style-reservas.css'
import propertyService from "../../Controllers/propertyService"
export function ListOwnProperties({listOwnProperties, setListaPropiedades}){
   
    //El .map es como un forEach
    //El (property) es el objeto donde se quiere que se guarde cada iteración
    //Lamada al componente MyProerty pasando el parametro

    const changeAvailable = (alojamiento)=>{
		var newAlojamiento ={...alojamiento}
		if(alojamiento.available ===1 )
		newAlojamiento.available = 0
		else newAlojamiento.available = 1

        var copyProps = [...listOwnProperties]
        var index = copyProps.findIndex((prop)=> prop.id === alojamiento.id)
        copyProps[index] = newAlojamiento
        setListaPropiedades(copyProps)
		propertyService.updateProperty(newAlojamiento)
		
		
	} 
   
    return (
        <>
            {listOwnProperties.map( (property, index) => 
                <MyProperty key={property.id} alojamiento={property} changeAvailable={changeAvailable}/>
            )}
            
        </>
    )
}

