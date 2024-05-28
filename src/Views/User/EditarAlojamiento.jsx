import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import propertyService from "../../Controllers/propertyService";
import './../../css/editarAlojamiento.css';

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

    
    return(
        <>
            {loading? null : 
                <div id ="main">

                    <div id="contenedor-central">
                        <EditPropertyForm alojamiento={alojamiento}/>
                    </div>
                    
                    <div id="contenedor-aux">
                        <h2>Añadir nueva habitación</h2>
                        <a href="">Ver las habitaciones de {alojamiento.name}</a>

                        <CreateAccommodationForm alojamiento={alojamiento}/>
                    </div> 
                    
                </div>
            }
        </>

    )
}