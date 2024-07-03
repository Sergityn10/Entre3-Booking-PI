import { useContext, useEffect, useState } from "react"
import { Buscador } from "../Components/Buscador"
import { ListProperty } from "../Components/Properties/listProperty"
import propertyService from "../Controllers/propertyService"
import { useLocation, useParams } from "react-router-dom"
import FavoriteContext from "../context/FavoriteContext"
import "./../css/listaAlojamientos.css"
export function PagBusqueda(){
    const [properties,setProperties] = useState([])
    const {propsFavorites, setPropsFavorites}= useContext(FavoriteContext)
    
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
        
    },[search])
    return(
        <>
        <main>
        <Buscador/>
            
            <ListProperty listProperties={properties} listFavorites={propsFavorites} setFavorites={setPropsFavorites}/>
        </main>
           
        </>
    )
}