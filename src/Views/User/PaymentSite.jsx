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
        {loading? <Loading/> : 
            <main className="reservas-carrito">
    <div className="pasos-carrito"></div>
    <aside>
      <section className="box-carrito">
        <div id="apartamento-estrellas">
          <span>Apartamento </span>
          <div id="estrellas">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </div>
        </div>
        <h4>{property.name}</h4>
        <p>{property.address}</p>
        <small id="estado-ubicacion">Excelente ubicación-9.5</small>
        <div className="contenido-valoracion-apartamento">
          <span className="button-valoracion">{property.gradesAverage}</span>
          <p>{property.gradesAverage} - NUM COMENTARIOS</p>
        </div>
        <div className="datos-apartamento-todo">
          <div className="informacion-apartamento">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z" />
              </svg>
              <span>Wifi gratis</span>
            </span>
          </div>
          <div className="informacion-apartamento">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z" />
              </svg>
              <span>Wifi gratis</span>
            </span>
          </div>
          <div className="informacion-apartamento">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z" />
              </svg>
              <span>Wifi gratis</span>
            </span>
          </div>
          <div className="informacion-apartamento">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z" />
              </svg>
              <span>Wifi gratis</span>
            </span>
          </div>
          <div className="informacion-apartamento">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z" />
              </svg>
              <span>Wifi gratis</span>
            </span>
          </div>
        </div>
      </section>
      <section className="box-carrito">
        <h4>Los datos de tu reserva</h4>
        <div id="fechas-reserva">
          <div className="container-fecha">
            <p>Entrada:</p>
            <p className="text-bold">DSEMANA, DIA MES AÑO</p>
            <p>RANGO HORA ENTRADA</p>
          </div>
          <div className="container-fecha">
            <p>Salida:</p>
            <p className="text-bold">DSEMANA, DIA MES AÑO</p>
            <p>RANGO HORA SALIDA</p>
          </div>
        </div>
        <p>
          Duracion de la estancia:{" "}
          <span className="text-bold">X dias y X noches.</span>
        </p>
        <div>
          <details>
            <summary>
              Has seleccionado: <br />
              <span className="text-bold">
                {totalNumAccoms} para NUMERO TIPO PERSONA
              </span>{" "}
            </summary>
            {books.map((book, index)=>{
              var nameAcc;
              accommodationService.getAccommodationByIda(book.idacc).then((response)=> nameAcc=response.name)
              return(<>
                <p>{book.numAccommodations} - {nameAcc}</p>
                
              </>)
            })}
            
          </details>
        </div>
        <a
          className="boton-bg-transparente box-carrito"
          id="boton-seleccion"
          href=""
        >
          Cambia tu selección
        </a>
      </section>
      <section className="box-carrito">
        <h4>Desglose del precio</h4>
        {/*
              <p>Precio original  <span class="precio">MONEDA PRECIO</span></p>
              <p>DESCUENTO  <span class="precio">-MONEDA DESCUENTO</span></p> */}
        <div id="inf-precio-a-pagar">
          <h3>TOTAL</h3>
          <div id="totalAPagar">
            <span className="precio text-bold">
              <span className="simbolo-moneda">€</span>{" "}
              <span className="digito-precio">{totalPrice}</span>
            </span>
            {/* <strong class="precio-con-descuento">MONEDA PRECIO</strong>*/}
            <p className="text-small">
              Incluye impuesto y cargos (en letra pequeña)
            </p>
          </div>
        </div>
        
      </section>
      
    </aside>
    <div className="contenido-carrito">

    {user? <BoxUserPayment user={user}/> : <BoxNoSignInUserPayment/>}
      <FormPaymentBooks user={user} books={books} totalPrice={totalPrice}/>
      
    </div>
  </main>
  
        }
  <footer></footer>
</>

    )
}