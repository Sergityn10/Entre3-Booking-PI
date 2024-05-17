import { useEffect, useState } from "react"
import { Buscador } from "../Components/Buscador"
import { ListProperty } from "../Components/Properties/listProperty"
import propertyService from "../Controllers/propertyService"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../Controllers/UserService"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
export default function Index(){
     const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    const funLogIn = ()=>{
        isLoggedIn? setIsLoggedIn(false) : setIsLoggedIn(true);  
    }
    
    useEffect(()=>{

    },[])

    
    return(
        <>
        <Buscador/>
        <main>
             
        </main>
        
        </>
    )
}