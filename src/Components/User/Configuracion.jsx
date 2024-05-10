import { useState } from "react"
import React from "react"
import { MyProperty } from "./MyProperty"
import './../../css/style-perfil-usuario.css'

export function Configuracion(){
    //Está la etiqueta main porque todo en su conjunto lo es
    return(
        <main>
            <h1>CONFIGURACIÓN DE LA CUENTA</h1>
            <div class="contenedor-perfil">
                <section class="card-perfil">
                    <h2>Información del perfil</h2>
                    <p>Actualiza tus datos personales.</p>
                    <a href="EditUserServlet.do">Editar perfil</a>
                </section>
                
                <section class="card-perfil">
                    <h2>Tus alojamientos favoritos</h2>
                    <p>Revisa todos tus alojamientos favoritos</p>
                    <a href="${pageContext.request.contextPath}/favorites/ListFavoritesPropertiesByUsersServlet.do">Ver mis alojamientos favoritos</a>
                </section>
                
                <section class="card-perfil">
                    <h2>Mis propiedades registradas</h2>
                    <p>Gestiona, actualiza y revisa toda la información acerca de tus apartamentos favoritos</p>
                    <a href="${pageContext.request.contextPath}/properties/ListPropertiesServlet.do">Gestionar mis alojamientos</a>
                </section>
                
                <section class="card-perfil">
                    <h2>Mis reservas</h2>
                    <img src="/images/user.png" alt="Imagen usuario" />
                    <p>Recuerda y revisa tus reservas realizadas</p>
                    <a href="">Ver mis reservas</a>
                </section>
                
                <section class="card-perfil">
                    <h2>Mis reseñas</h2>
                    <p>Mira todas tus reseñas en alojamientos</p>
                    <a href="${pageContext.request.contextPath}/reviews/ListReviewsServlet.do">Ver mis reseñas</a>
                </section>
            </div>
        </main>
    );


}