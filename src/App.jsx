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


export default function App(){
const [reviews,setReviews] = useState([]);
const [isLoggedIn, setIsLoggedIn] =useState(false);
const [user, setUser] = useState(null)

   const funLogIn = ()=>{
        isLoggedIn? setIsLoggedIn(false) : setIsLoggedIn(true);  
    }

    
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

                </Routes>
           </BrowserRouter>
        </UserContext.Provider>
          
                
           
        </>
    )
}
