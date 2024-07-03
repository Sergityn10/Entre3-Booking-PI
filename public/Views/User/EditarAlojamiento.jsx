import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import propertyService from "../../Controllers/propertyService";
import { NavLink } from "react-router-dom";
//import './../../css/editarAlojamiento.css';

import { EditPropertyForm } from "../../Components/Forms/EditPropertyForm";
import { CreateAccommodationForm } from "../../Components/Forms/CreateAccommodationForm";

export function EditarAlojamiento(){
    const {idProperty} = useParams();
    const [alojamiento, setAlojamiento] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        propertyService.getProperty(idProperty)
        .then((response) =>{
            setAlojamiento(response.data)
            setLoading(false)
        })
    }, [idProperty])

    if (!alojamiento) return (<h1>Cargando...</h1>);
    else    
    return(
        <>
            {loading? null : 
                <div id ="main">

                    <div id="contenedor-central">
                        <EditPropertyForm alojamiento={alojamiento}/>
                    </div>
                    
                    <div id="contenedor-aux">
                        <h2>Añadir nueva habitación</h2>
                        <NavLink to={`/habitaciones-alojamiento/${alojamiento.id}`}>Ver las habitaciones de {alojamiento.name}</NavLink>

                        <CreateAccommodationForm alojamiento={alojamiento}/>
                    </div> 

                </div>
            }
        </>

    )
}