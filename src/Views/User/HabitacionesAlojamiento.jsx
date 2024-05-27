import { useEffect, useState } from "react";
import React from "react";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';
import { ListOwnProperties } from "../../Components/User/ListOwnProperties";
import {ListAccomodations} from "../../Components/User/ListAccommodations";
import './../../css/listaHabitaciones.css';
import accommodationService from "../../Controllers/accommodationService";

export function MisAlojamientos() {
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    const [listaHabitaciones, setListaHabitaciones] = useState([])

    //Hay que pasarle el idProperty????????????????
    useEffect(() =>{
        accommodationService.getAccommodationsByIdp()
        .then((response) =>{
            setListaHabitaciones(response)
            console.log(response)
        })
    }, [])

    return (
      
        <div class="container-reservas">
            <section id="titulo">
                <h2>Alojamiento: {alojamiento.name} - Habitaciones</h2>

                <NavLink to="/">Añadir nueva habitación</NavLink>
            </section>
            
            <ListOwnProperties listOwnProperties = {listaPropiedades}/>

      </div> 
      
    );
}