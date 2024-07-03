import { useEffect, useState } from "react";
import propertyService from "../../Controllers/propertyService";
import bookingAccommodationsService from "../../Controllers/bookingAccommodationService";
import accommodationService from "../../Controllers/accommodationService";
import Loading from "../Loading";
import { AccomBookTotal } from "../Bookings/AccomBookTotal";
import styles from "./../../css/style-reservas.module.css";
export function UserBooking({ booking}) {
    const [property, setProperty] = useState(null)
    const [accommodations, setAccommodations] = useState([])
    const [loading, setLoading]= useState(true)
    useEffect(()=>{
        bookingAccommodationsService.getBookingAccommodationsByIdb(booking.id).then((response)=>{
            setAccommodations(response)
            var bookAccom = response[0]
            console.log(bookAccom)
            accommodationService.getAccommodationByIda(bookAccom.idacc).then((respuesta)=>{
                propertyService.getProperty(respuesta.idp).then((resp)=>{
                    
                    setProperty(resp)
                    })
            })
        }).finally(()=> setTimeout(()=>setLoading(false),2000))
    },[booking.id])
   return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <section className={styles["lugar-reserva"]}>
                    <h3>{property.city}</h3>
                    <div className={styles["box-carrito"]}>
                        <section className={styles["info-lugar-reserva"]}>
                            <h5 className={styles["nom-lugar-strong"]}>{property.name}</h5>
                        </section>

                        <section className={styles["card"]}>
                            <h4>Alojamientos:</h4>
                            {accommodations.map((bookAccom) => (
                                <AccomBookTotal bookAccom={bookAccom} key={bookAccom.idacc} />
                            ))}
                        </section>

                        <div className={styles["precio-con-menu"]}>
                            <h4>Precio total:</h4>
                            <p>{booking.totalPrice}</p>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
