import { useEffect, useState } from "react";
import React from "react";

import { Link, NavLink,Route, useMatch } from 'react-router-dom';

import { Routes } from "react-router-dom";

import { MisAlojamientos } from "./MisAlojamientos";

//import './../../css/style-perfil-usuario.css';
import { EditUser } from "../../Components/User/EditUser";
import { SignInForm } from "../../Components/Forms/SignInForm";

export function Configuracion() {
    
    
    return (
        <main>
            <h1 className="titulo-configuracion">CONFIGURACIÓN DE LA CUENTA</h1>
            <div className="contenedor-perfil">
                <section className="card-perfil">
                    <h2>Información del perfil</h2>
                    <p>Actualiza tus datos personales.</p>
                    <NavLink to="editUser">Editar perfil</NavLink>
                </section>
                
                <section className="card-perfil">
                    <h2>Tus alojamientos favoritos</h2>
                    <p>Revisa todos tus alojamientos favoritos</p>
                    <NavLink to="favorites">Ver mis alojamientos favoritos</NavLink>
                </section>
                
                <section className="card-perfil">
                    <h2>Mis propiedades registradas</h2>
                    <p>Gestiona, actualiza y revisa toda la información acerca de tus apartamentos favoritos</p>
                    <NavLink to="mis-alojamientos">Gestionar mis alojamientos</NavLink>
                </section>
                
                <section className="card-perfil">
                    <h2>Mis reservas</h2>
                    <p>Recuerda y revisa tus reservas realizadas</p>
                    <NavLink to="/">Ver mis reservas</NavLink>
                </section>
                
                <section className="card-perfil">
                    <h2>Mis reseñas</h2>
                    <p>Mira todas tus reseñas en alojamientos</p>
                    <NavLink to="/config/reviews">Ver mis reseñas</NavLink>
                </section>
            </div>

        </main>
    );
}
