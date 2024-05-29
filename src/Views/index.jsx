import { useEffect, useState } from "react"
import { Buscador } from "../Components/Buscador"
import { ListProperty } from "../Components/Properties/listProperty"
import propertyService from "../Controllers/propertyService"
import { useNavigate } from "react-router-dom"
import UserContext from "../context/UserContext"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
export default function Index(){
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();
  
    const handleInputChange = (e) => {
      setUserId(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (userId) {
        navigate(`/HabitacionesUsuario/${userId}`);
      }
    };


    return(
        <>
        
            <main>
                <form onSubmit={handleSubmit}>
                    <label>
                    ID de Usuario:
                    <input 
                        type="number" 
                        value={userId} 
                        onChange={handleInputChange} 
                        required 
                    />
                    </label>
                    <button type="submit">Buscar</button>
                </form>
            </main>
        </>
    )
}