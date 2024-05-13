/* eslint-disable no-unused-vars */
import Header from "./Components/Header"
import React, { createContext, useEffect, useContext } from "react"
import {NavLink} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {use, Suspense } from "react"
import { useState } from "react"
import Loading from "./Components/Loading"
import { LogIn } from "./Views/login.jsx";
import { PagBusqueda } from "./Views/search.jsx";
import Index from "./Views/index.jsx";
import { UserContext } from "./Controllers/UserService.js";
import { SignUp } from "./Views/signup.jsx";
import { Configuracion } from "./Components/User/Configuracion.jsx";
import { DetailProperty } from "./Views/Properties/DetailProperty.jsx";


export default function App(){

const [isLoggedIn, setIsLoggedIn] =useState(false);
const [user, setUser] = useState(null)

   const funLogIn = ()=>{
        isLoggedIn? setIsLoggedIn(false) : setIsLoggedIn(true);  
    }

    const funLogOut = ()=>{
        setIsLoggedIn(false);
        }
    useEffect(()=>{
        
        if(user){
            setUser(user);
            setIsLoggedIn(true);
            }

    },[isLoggedIn])
    return (
        <>
        <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
         <Header isLogIn={isLoggedIn}/>
           <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Index myClick={funLogIn}/>} />
                    <Route path="/search" element={<PagBusqueda/>} />
                     <Route path="/login" element={<LogIn myClick={funLogIn} />} /> 
                     <Route path="/signup" element={<SignUp/>} /> 
                    <Route path="/property/:idProperty" element={<DetailProperty/>}/>

                    <Route path ="/config" element={<Configuracion/>} />


                </Routes>
           </BrowserRouter>
        </UserContext.Provider>
          
                
           
        </>
    )
}
