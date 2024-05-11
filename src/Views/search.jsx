import { useEffect, useState } from "react"
import { Buscador } from "../Components/Buscador"
import { ListProperty } from "../Components/Properties/listProperty"
import propertyService from "../Controllers/propertyService"
export function PagBusqueda(){
    const [properties,setProperties] = useState([])
    useEffect(()=>{
        propertyService.getAllProperties()
        .then(data=>{
            setProperties(data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <>
        <Buscador/>
        <main>
            
            <ListProperty listProperties={properties}/>
        </main>
           
        </>
    )
}