import { useEffect, useState } from "react"
import { Buscador } from "../Components/Buscador"
import { ListProperty } from "../Components/Properties/listProperty"
import propertyService from "../Controllers/propertyService"
export default function Index(){
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
             
            <h1>ESTA SERÁ LA PAGINA PRINCIPAL DE NUESTOR PROYECTO.</h1>
           <ListProperty listProperties={properties}/>
        </main>
        
        </>
    )
}