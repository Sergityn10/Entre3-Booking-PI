import { useState } from "react"
import { useContext } from "react"
import UserContext from "../../context/UserContext"
import { SignInForm } from "../Forms/SignInForm"
export function EditUser(){
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    return(
        <div>
            <h1>EDITICION DEL USUARIO</h1>
            <SignInForm />
        </div>
    )

}