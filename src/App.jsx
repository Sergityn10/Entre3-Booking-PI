/* eslint-disable no-unused-vars */
import Header from "./Components/Header"
import React, { createContext, useEffect } from "react"
import {NavLink} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {use, Suspense } from "react"
import { useState } from "react"
import Loading from "./Components/Loading"
import { pagBusqueda } from "./Views/search.jsx";
import Index from "./Views/index.jsx";
import { LogIn } from "./Views/login.jsx";
import { SignUp } from "./Views/signup.jsx";
import { Configuracion } from "./Components/User/Configuracion.jsx";

export default function App(){

    const [reviews,setReviews] = useState([]);
    const [isLoggedIn,setIsLoggedIn] =useState(false);

    const fetchReviews = ()=>{
        fetch("https://localhost:8443/Booking_entrega2/rest/reviews")
        .then((response) => response.json())
        .then(data => setReviews(data))
    }    

    const funLogIn = ()=>{
            isLoggedIn? setIsLoggedIn(false) : setIsLoggedIn(true);
    }
    
    useEffect(() => {fetchReviews();}, []);
    
    return (
        <>
           <Header isLogIn={isLoggedIn}/>
           <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index/>} />
                    <Route path="/search" element={<pagBusqueda/>} />
                    <Route path="/login" element={<LogIn Click= {funLogIn}/>} /> 
                    <Route path="/signup" element={<SignUp/>} /> 

                    <Route path ="/config" element={<Configuracion/>} />

                </Routes>
           </BrowserRouter>
                
           
        </>
    )
}