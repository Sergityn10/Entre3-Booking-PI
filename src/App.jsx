/* eslint-disable no-unused-vars */
import Header from "./Components/Header"
import React, { createContext, useEffect, useContext } from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import {use, Suspense } from "react"
import { useState } from "react"
import Loading from "./Components/Loading"
import { LogIn } from "./Views/login.jsx";
import { PagBusqueda } from "./Views/search.jsx";
import Index from "./Views/index.jsx";
import UserContext from "./context/UserContext.jsx";
import { SignUp } from "./Views/signup.jsx";

import { EditUser } from "./Components/User/EditUser.jsx";
import { Configuracion } from "./Views/User/Configuracion.jsx"

import { MisAlojamientos } from "./Views/User/MisAlojamientos.jsx";


import { UserContextProvider } from "./context/UserContext.jsx";
import { MisFavoritos } from "./Views/User/MisFavoritos.jsx";
import { DetailProperty } from "./Views/Properties/DetailProperty.jsx";
import { EditarAlojamiento } from "./Views/User/EditarAlojamiento.jsx";


export default function App(){
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    useEffect(()=>{
        
    },[])
    return (
        <>
            <UserContextProvider>
                <BrowserRouter>
                    <Header />
                
                    <Routes>
                        <Route path="/" element={<Index/>} />
                        <Route path="/search" element={<PagBusqueda/>} />
                        <Route path="/login" element={<LogIn />} /> 
                        <Route path="/signup" element={<SignUp/>} /> 
                        <Route path="/property/:idProperty" element={<DetailProperty/>}/>


                        <Route exact path ="/config" element={<Configuracion/>} />
                        <Route path="/config/editUser" element={<EditUser />} />
                        <Route path="/config/favorites" element={<MisFavoritos />} />
                        <Route path="/config/mis-alojamientos" element={<MisAlojamientos />} />
                        <Route path="/edit-property/:idProperty" element={<EditarAlojamiento/>}/>

                    </Routes>
                </BrowserRouter>
            </UserContextProvider>    
        </>
    )
}
