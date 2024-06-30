import { useEffect, useState } from "react"
import propertyService from "../../Controllers/propertyService"
import accommodationService from "../../Controllers/accommodationService"
import Loading from "../Loading"
export function CardBookAccoms({index, book,shopCart, setBooks}){
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

    const handleDeleteBook = ()=>{
        //delete book from the shopping Cart
        //Creamos una copia de la actual carrito
        let newShopCart = [...shopCart]
        //Eliminamos la reserva elegida de la copia de Carrito
        newShopCart.splice(index,1)
        //Actualizamos el estado de nuestro Contexto de Carrito
        setBooks(newShopCart)
        //Actualizamos tambien la cookie que tiene almacenada nuestras reservas
        localStorage.setItem("ShoppingCart", JSON.stringify(newShopCart))
    }

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
                        <p>{accom.name}</p>
                        <p>{book.numAccommodations}</p>
                    </section>

                    <div className="precio-con-menu">
                        
                        
                        <input className="menu" type="image" src="../../public/img/Iconos/delete.png" alt="" onClick={handleDeleteBook} />
                    </div>
                </div>
            </section>
                

            }
        </>
    )
}