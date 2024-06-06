import Loading from "../Loading"
import UserContext from "../../context/UserContext"
import { useState, useContext, useEffect } from "react"
import propertyService from "../../Controllers/propertyService"
import userService from "../../Controllers/UserService"
import { NavLink } from "react-router-dom"
import reviewService from "../../Controllers/reviewController"

export function CardMiReview ({review}){
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
                console.log(response)
                })
                } catch (error) {
                    console.error(error)
                    }
            

    }
    
    return (
        <>
            <section className="lugar-reserva">
         
            {loading? <Loading/> :

            <>
                <h3>{property.name}-{property.city}</h3>
                <div className="box-carrito">
                    <section className="info-lugar-reserva">
                        <h5 className="nom-lugar-strong">Valoración: {review.grade}</h5>
                    </section>

                    <section className="card">
                        <h5>Comentario:</h5>
                        <q>{review.review}</q>
                        
                    </section>

                    <section className="buttons">
                        <NavLink className="boton-bg-azul" to={`/property/${property.id}`}>Editar review</NavLink>
                        <button className="button-png">
                            <img src="../../img/Iconos/delete.png" alt="Eliminar review" onClick={handleDeleteReview}/>
                        </button>
                    </section>
                
                </div>
                

            </>
            }
            
        </section>
        </>
    )
}