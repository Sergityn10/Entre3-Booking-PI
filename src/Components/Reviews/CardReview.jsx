import { useEffect, useState } from "react"
import userService from "../../Controllers/UserService"
import Loading from "../Loading"
import propertyService from "../../Controllers/propertyService"
export function CardReview({review}){
    const[property,setProperty] = useState(null)
    const[userReview, setUserReview] =useState(null)
    const[loading, setLoading] = useState(true)

    useEffect(() =>{
        try {
            propertyService.getProperty(review.idp).then((response)=>{
            setProperty(response)
            
        })
        userService.getUserByid(review.idu).then((response) =>{
            setUserReview(response)
            
        })

        } catch (error) {
            console.error(error)
        }
        setTimeout(()=>setLoading(false),2000)
        
        
    },[])
    return(
        <section className="lugar-reserva">
         
            {loading? <Loading/> :

            <>
                
                <article className="valoracion">
		                    <div className="user-grado">
                            <h4>{userReview.name}</h4>
		                        <p>Valoración: {review.grade}</p>
		                    </div>
		                    <q>{review.review}</q>
		        </article>

            </>
            }
            
        </section>
    )
}