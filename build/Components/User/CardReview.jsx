import UserContext from "../../context/UserContext"
import { useContext, useEffect, useState } from "react"
import propertyService from "../../Controllers/propertyService"
export function CardReview({review}){
        const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    const [loading, setLoading] = useState(true)
    const [alojamiento, setAlojamiento] = useState(null)

    useEffect(()=>{
        propertyService.getProperty(review.idp).then((response)=>{
            setAlojamiento(response.data)
            console.log(response)
        }).finally(setLoading(false))
        
    },[])
    return(
        <>
         {loading? null :
            
            <>
            <section className="lugar-reserva">
                <h3>{alojamiento.city}</h3>
                <div className="box-carrito">
                    <img src="/img/Lugares/caceres.jpg" alt="imagen-sobre-lugar" />

                    <section className="info-lugar-reserva">

                        <h5 className="nom-lugar-strong">{alojamiento.name}</h5>
                        
                    </section>

                    <section>
                        <p>Rating: {review.grade}</p>
                        <p>Comentario: {review.review}</p>
                    </section>

                    <div className="precio-con-menu">
                        
                        
                        <input className="menu" type="image" src="../../public/img/Iconos/delete.png" alt="" />
                    </div>
                </div>
            </section>
            </>
            }
            
        </>
    )
}