import React from "react";

import { useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';
import Loading from "../../Components/Loading";
import './../../css/listaHabitaciones.css';
import { useParams } from "react-router-dom";

import {ListAccommodations} from "../../Components/User/ListAccommodations";
import propertyService from "../../Controllers/propertyService";
import accommodationService from "../../Controllers/accommodationService";

export function HabitacionesAlojamiento() {
    const {idProperty} = useParams();
    const [alojamiento, setAlojamiento] = useState(null);
    const [listaHabitaciones, setListaHabitaciones] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        accommodationService.getAccommodationsByIdp(idProperty)
        .then((response) =>{
            setListaHabitaciones(response)
        })

        propertyService.getProperty(idProperty)
        .then((response) =>{
            setAlojamiento(response.data)
        })
        setTimeout(()=>setLoading(false),1000 )
        
    }, [idProperty])

    return (
        <>
            {loading? <Loading/> : 
                <div className="container-reservas">
                    <section id="titulo">
                        <h2>Alojamiento: {alojamiento.name} - Habitaciones</h2>

                        <NavLink to="/">Añadir nueva habitación</NavLink>
                    </section>
                    
                    <ListAccommodations listPropertyAccomodations = {listaHabitaciones}/>

                </div> 
            }
        </>
      
    );
}