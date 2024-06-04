import { useEffect, useState } from "react"
import userService from "../../Controllers/UserService"
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
            console.log(response)
        })

        } catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
        
    },[])
    return(
        <section className="lugar-reserva">
         
            {loading? null :
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