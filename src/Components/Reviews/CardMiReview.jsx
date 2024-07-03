import Loading from "../Loading"
import UserContext from "../../context/UserContext"
import { useState, useContext, useEffect } from "react"
import propertyService from "../../Controllers/propertyService"
import userService from "../../Controllers/UserService"
import { NavLink } from "react-router-dom"
import reviewService from "../../Controllers/reviewController"
import ReviewContext from "../../context/ReviewContext"
import styles from "./../../css/style-reservas.module.css"
export function CardMiReview ({review}){
    const{reviews, setReviews} = useContext(ReviewContext)
    const {user} = useContext(UserContext);
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

    const handleDeleteReview = ()=>{
        try {
            reviewService.deleteReview(review.idp, review.idu).then((response)=>{
                reviewService.getAllReviewsByUser(user.id).then((resp)=> setReviews(resp))
                })
                } catch (error) {
                    console.error(error)
                    }
                    // finally{
                        
                    // }

            

    }
    
    return (
        <>
            <section className={styles["lugar-reserva"]}>
         
            {loading? <Loading/> :

            <>
                <h3>{property.name}-{property.city}</h3>
                <div className={styles["box-carrito"]}>
                    <section className={styles["info-lugar-reserva"]}>
                        <h5 className={styles["nom-lugar-strong"]}>Valoración: {review.grade}</h5>
                    </section>

                    <section className={styles["card"]}>
                        <h5>Comentario:</h5>
                        <q>{review.review}</q>
                        
                    </section>

                    <section className="buttons">
                        <NavLink className="boton-bg-azul" to={`/property/${property.id}`}>Editar review</NavLink>
                        <input className={styles["menu"]} type="image" src={`${process.env.PUBLIC_URL}/img/Iconos/delete.png`} alt="" onClick={handleDeleteReview}/>
                        
                    </section>
                
                </div>
                

            </>
            }
            
        </section>
        </>
    )
}