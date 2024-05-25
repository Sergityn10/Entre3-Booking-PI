import UserContext from "../context/UserContext";
import { useContext } from "react";
export default function useUser(    ){
    const { jwt, setJWT } = useContext(UserContext);

    return{
        
    }
}