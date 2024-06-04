
import React, { useEffect, useState } from "react"
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import reviewService from "../../Controllers/reviewController";
import propertyService from "../../Controllers/propertyService";
import { ListReviews } from "../../Components/Reviews/ListReviews";
import Loading from "../../Components/Loading";

export function MisReviews(){
    const[reviews, setReviews] = useState([])
    
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        reviewService.getAllReviewsByUser(user.id).then((response)=>{
            setReviews(response)
            console.log(reviews)
        }).finally(setLoading(false))
        setLoading(false)
        
    },[])

    return (
        <main>
            <h1>MisReviews</h1>
            {loading? <Loading/>:
            <>
                <ListReviews listReviews={reviews}/>
            </>}

        </main>
    )
}