import { useContext, useEffect, useState } from "react"
import ShoppingCartContext from "../../context/ShoppingCartContext"
import UserContext from "../../context/UserContext"
import bookingService from "../../Controllers/bookinService"
import accommodationService from "../../Controllers/accommodationService"
import propertyService from "../../Controllers/propertyService"

import { BoxNoSignInUserPayment } from "../../Components/Bookings/BoxNoSignInUserPayment"
import { BoxUserPayment } from "./BoxUserPayment"
import { FormPaymentBooks } from "../../Components/Forms/FormPaymentBooks"
import Loading from "../../Components/Loading"
import styles from "./../../css/style-carrito.module.css"

export function PaymentSite (){

    const {books, setBooks,totalNumAccoms, setTotalNumAccoms} = useContext(ShoppingCartContext)
    
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    const [property, setProperty] =useState(null)
    
    const [totalPrice, setTotalPrice] = useState(0)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
            var total = 0
        books.forEach(book =>{
            accommodationService.getAccommodationByIda(book.idacc).then((response)=>{
                total += response.price * book.numAccommodations
                console.log(total)
                setTotalPrice(total)
            })
                console.log(total)
            
            })
            
            accommodationService.getAccommodationByIda(books.at(0).idacc).then((response)=>{
              propertyService.getProperty(response.idp).then((resp)=>setProperty(resp))

            })
            
           
        
        setTimeout(()=>setLoading(false),2000)
    },[])
 return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className={styles["reservas-carrito"]}>
          <div className={styles["pasos-carrito"]}></div>
          <aside>
            <section className={styles["box-carrito"]}>
              <div id={styles["apartamento-estrellas"]}>
                <span>Apartamento </span>
                <div id={styles["estrellas"]}>
                  {[...Array(4)].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      {/* Your SVG paths */}
                    </svg>
                  ))}
                </div>
              </div>
              <h4>{property.name}</h4>
              <p>{property.address}</p>
              <small id="estado-ubicacion">Excelente ubicación-9.5</small>
              <div className={styles["contenido-valoracion-apartamento"]}>
                <span className={styles["button-valoracion"]}>{property.gradesAverage}</span>
                <p>
                  {property.gradesAverage} - NUM COMENTARIOS
                </p>
              </div>
              <div className={styles["datos-apartamento-todo"]}>
                {[...Array(5)].map((_, index) => (
                  <div key={index} className={styles["informacion-apartamento"]}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        {/* Your SVG paths */}
                      </svg>
                      <span>Wifi gratis</span>
                    </span>
                  </div>
                ))}
              </div>
            </section>
            <section className={styles["box-carrito"]}>
              <h4>Los datos de tu reserva</h4>
              <div id="fechas-reserva">
                <div className={styles["container-fecha"]}>
                  <p>Entrada:</p>
                  <p className={styles["text-bold"]}>DSEMANA, DIA MES AÑO</p>
                  <p>RANGO HORA ENTRADA</p>
                </div>
                <div className={styles["container-fecha"]}>
                  <p>Salida:</p>
                  <p className={styles["text-bold"]}>DSEMANA, DIA MES AÑO</p>
                  <p>RANGO HORA SALIDA</p>
                </div>
              </div>
              <p>
                Duracion de la estancia:{" "}
                <span className={styles["text-bold"]}>X dias y X noches.</span>
              </p>
              <div>
                <details>
                  <summary>
                    Has seleccionado: <br />
                    <span className={styles["text-bold"]}>
                      {totalNumAccoms} para NUMERO TIPO PERSONA
                    </span>{" "}
                  </summary>
                  {books.map((book, index) => (
                    <p key={index}>
                      {book.numAccommodations} - {book.nameAcc}
                    </p>
                  ))}
                </details>
              </div>
              <a
                className={`${styles["boton-bg-transparente"]} ${styles["box-carrito"]}`}
                id="boton-seleccion"
                href="#"
              >
                Cambia tu selección
              </a>
            </section>
            <section className={styles["box-carrito"]}>
              <h4>Desglose del precio</h4>
              <div id="inf-precio-a-pagar">
                <h3>TOTAL</h3>
                <div id="totalAPagar">
                  <span className={`${styles["precio"]} ${styles["text-bold"]}`}>
                    <span className={styles["simbolo-moneda"]}>€</span>{" "}
                    <span className={styles["digito-precio"]}>{totalPrice}</span>
                  </span>
                  <p className={styles["text-small"]}>
                    Incluye impuesto y cargos (en letra pequeña)
                  </p>
                </div>
              </div>
            </section>
          </aside>
          <div className={styles["contenido-carrito"]}>
            {user ? <BoxUserPayment user={user} styles={styles}/> : <BoxNoSignInUserPayment styles={styles}/>}
            <FormPaymentBooks user={user} books={books} totalPrice={totalPrice} styles={styles}/>
          </div>
        </main>
      )}
      <footer></footer>
    </>
  );
}