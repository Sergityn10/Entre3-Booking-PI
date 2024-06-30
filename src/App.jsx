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
import { MisReviews } from "./Views/User/MisReviews.jsx";
import { MisFavoritos } from "./Views/User/MisFavoritos.jsx";
import { DetailProperty } from "./Views/Properties/DetailProperty.jsx";
import { EditarAlojamiento } from "./Views/User/EditarAlojamiento.jsx";
import { HabitacionesAlojamiento } from "./Views/User/HabitacionesAlojamiento.jsx";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext.jsx";
import { ReviewContextProvider } from "./context/ReviewContext.jsx";
import { FavoriteContextProvider } from "./context/FavoriteContext.jsx";
import { ShoppingCart } from "./Views/User/ShoppingCart.jsx";
import { PaymentSite } from "./Views/User/PaymentSite.jsx";
import { MisReservas } from "./Views/User/MisReservas.jsx";
 
export default function App(){
    const [listFavorites, setListFavorites] = useState([])
    useEffect(()=>{
        
    },[])
    return (
        <>
            <UserContextProvider>
                        <FavoriteContextProvider>
                        <ShoppingCartContextProvider>
                <BrowserRouter>
                    <Header />
                    
                    
                
                    <Routes>
                        <Route path="/" element={<Index/>} />
                    
                    
                        <Route path="/search" element={<PagBusqueda/>} />
                    
                        
                        <Route path="/login" element={<LogIn />} /> 
                        <Route path="/signup" element={<SignUp/>} /> 
                        <Route path="/property/:idProperty" element={<DetailProperty/>}/>

                        <Route exact path ="/config" element={<Configuracion/>} />
                        <Route path="/payment" element={<PaymentSite/>}/>
                        <Route exact path="/config/favorites" element={<MisFavoritos />} />
                        <Route path="/config/editUser" element={<EditUser />} />
                        
                        <Route path="/config/reviews" element={
                        <ReviewContextProvider >
                            <MisReviews />
                        </ReviewContextProvider>
                        
                        
                        } />
                        
                        
                        <Route path="/config/bookings" element={<MisReservas/>}/>
                        <Route path="/config/favorites" element={<MisFavoritos />} />
                        <Route path="/shoppingCart" element={
                            
                                <ShoppingCart />
                            
                            
                            }/>
                        <Route path="/config/mis-alojamientos" element={<MisAlojamientos />} />
                        <Route path="/edit-property/:idProperty" element={<EditarAlojamiento/>}/>
                        <Route path="/habitaciones-alojamiento/:idProperty" element={<HabitacionesAlojamiento/>}/>

                    </Routes>
                </BrowserRouter>
                </ShoppingCartContextProvider>
                        </FavoriteContextProvider>
                    
            </UserContextProvider>    
        </>
    )
}
