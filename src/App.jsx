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

import { DetailProperty } from "./Views/Properties/DetailProperty.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";



export default function App(){
    
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
                        <Route path="/misAlojamientos" element={<MisAlojamientos />} /> {/* Ruta independiente */}

                    </Routes>
                </BrowserRouter>
            </UserContextProvider>    
        </>
    )
}
