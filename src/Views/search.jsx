import { useEffect, useState } from "react"
import { Buscador } from "../Components/Buscador"
import { ListProperty } from "../Components/Properties/listProperty"
import propertyService from "../Controllers/propertyService"
import { useLocation, useParams } from "react-router-dom"
export function PagBusqueda(){
    const [properties,setProperties] = useState([])

    const {search} = useLocation()
    const query = new URLSearchParams(search)
    useEffect(()=>{
        propertyService.getByName(search)
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