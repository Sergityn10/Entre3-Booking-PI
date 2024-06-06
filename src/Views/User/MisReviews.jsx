
import React, { useEffect, useState, useContext } from "react"
import UserContext from "../../context/UserContext";
import reviewService from "../../Controllers/reviewController";
import propertyService from "../../Controllers/propertyService";
import { ListMisReviews } from "../../Components/Reviews/ListMisReviews";
import Loading from "../../Components/Loading";
import ReviewContext from "../../context/ReviewContext";
export function MisReviews(){
    const{reviews, setReviews} = useContext(ReviewContext)
    
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        reviewService.getAllReviewsByUser(user.id).then((response)=>{
            setReviews(response)
            
        }).finally(setLoading(false))
        
        setLoading(false)
        
    },[])

    return (
        <main>
            <h1>MisReviews</h1>
            {loading? <Loading/>:
            <>
                <ListMisReviews listReviews={reviews}/>
            </>}

        </main>
    )
}