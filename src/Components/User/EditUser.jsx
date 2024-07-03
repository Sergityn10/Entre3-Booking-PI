import { useState } from "react"
import { useContext } from "react"
import UserContext from "../../context/UserContext"
import { SignInForm } from "../Forms/SignInForm"
//import "./../../css/style-perfil-usuario.css"
export function EditUser(){
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    return(
        <main>
            <h1>EDICIÓN DEL USUARIO</h1>
            <SignInForm />
        </main>
    )

}