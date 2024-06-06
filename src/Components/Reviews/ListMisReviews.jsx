import { useState } from "react";
import UserContext from "../../context/UserContext";
import { CardMiReview } from "./CardMiReview";
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { NavLink } from "react-router-dom";
export function ListMisReviews({listReviews}){
    
    
    const [loading, setLoading] = useState(false);

    return (
        <>
            {listReviews.map((review,index) => <CardMiReview review={review} key={index}/>)}
        </>
    )
}