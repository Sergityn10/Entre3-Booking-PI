import { useEffect, useState } from "react"
import propertyService from "../../Controllers/propertyService"
import accommodationService from "../../Controllers/accommodationService"
import Loading from "../Loading"
export function CardBookAccoms({book}){
    const [accom, setAccom] = useState(null)
    const [property, setProperty] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        try {
            accommodationService.getAccommodationByIda(book.idacc).then((response)=>{
            setAccom(response)
            propertyService.getProperty(response.idp).then((res)=>{
                setProperty(res)
            })
        })
        } catch (error) {
            console.error(error)
        } finally{
            setTimeout(()=> setLoading(false),2000)
            
        }

        
        
    },[])

    return (
        <>
            {
                loading ?  <Loading/>  : 

                   <section className="lugar-reserva">
                <h3>{property.city}</h3>
                <div className="box-carrito">
                    <img src="/img/Lugares/caceres.jpg" alt="imagen-sobre-lugar" />

                    <section className="info-lugar-reserva">

                        <h5 className="nom-lugar-strong">{property.name}</h5>
                        {property.available === 1 ? (
                            <p>DISPONIBLE</p>
                        ) : (
                            <p>NO DISPONIBLE</p>
                        )}
                    </section>

                    <div className="precio-con-menu">
                        
                        
                        <input className="menu" type="image" src="../../public/img/Iconos/delete.png" alt="" />
                    </div>
                </div>
            </section>
                

            }
        </>
    )
}