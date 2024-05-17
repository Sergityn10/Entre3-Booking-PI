import { useState } from "react";
import React from "react";
import './../../css/style-perfil-usuario.css';

export function Configuracion() {
    return (
        <main>
            <h1>CONFIGURACIÓN DE LA CUENTA</h1>
            <div className="contenedor-perfil">
                <section className="card-perfil">
                    <h2>Información del perfil</h2>
                    <p>Actualiza tus datos personales.</p>
                    <a href="">Editar perfil</a>
                </section>
                
                <section className="card-perfil">
                    <h2>Tus alojamientos favoritos</h2>
                    <p>Revisa todos tus alojamientos favoritos</p>
                    <a href="">Ver mis alojamientos favoritos</a>
                </section>
                
                <section className="card-perfil">
                    <h2>Mis propiedades registradas</h2>
                    <p>Gestiona, actualiza y revisa toda la información acerca de tus apartamentos favoritos</p>
                    <a href="">Gestionar mis alojamientos</a>
                </section>
                
                <section className="card-perfil">
                    <h2>Mis reservas</h2>
                    <p>Recuerda y revisa tus reservas realizadas</p>
                    <a href="">Ver mis reservas</a>
                </section>
                
                <section className="card-perfil">
                    <h2>Mis reseñas</h2>
                    <p>Mira todas tus reseñas en alojamientos</p>
                    <a href="">Ver mis reseñas</a>
                </section>
            </div>
        </main>
    );
}
