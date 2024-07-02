import { useEffect, useState } from "react"
import accommodationService from "../../Controllers/accommodationService"
import bookingService from "../../Controllers/bookinService"
import bookingAccommodationsService from "../../Controllers/bookingAccommodationService"
import { useNavigate } from "react-router-dom"
export function FormPaymentBooks ({user, books, totalPrice}){
    const [erro, setError] = useState(null)
    const navigate = useNavigate()
    const [nombre, setNombre] = useState(null)
    const [apellido, setApellido] = useState(null)
    const [email, setEmail] = useState(null)
    const [telefono, setTelefono] = useState(null)
    const [creditCard, setCreditCard] = useState(null)

    useEffect(()=>{
        if(user){
            setNombre(user.name)
            setApellido(user.surname)
            setEmail(user.email)
            
            
            }
        
    },[user])

    const handleSubmitPayment = ()=>{
        if(user){
          let lastId = 0
         
            
            let book = {
            id: 0,
            idu: user.id,
            totalPrice: totalPrice
          }
          bookingService.createBook(book).then((response)=>{
            bookingService.getBookingsByIdu(user.id).then((resp)=>{
              var idBook = resp[resp.length-1].id
              console.log(idBook)
              books.forEach((book)=>{
                if(parseInt(book.numAccommodations) !== 0){
                  let bookingAccommodation ={
                  idb: idBook,
                  idacc: book.idacc,
                  numAccommodations: parseInt(book.numAccommodations)
                }

                // book.idb = idBook
                // book.numAccommodations = parseInt(book.numAccommodations)
                bookingAccommodationsService.createBookingAccommodation(bookingAccommodation)
                }
                
              })
            })
          })

            
          
          
        }
        navigate("/config/bookings")
        
    }
    return(
        <form method="post" onSubmit={handleSubmitPayment}>
        <section className="box-carrito datos-usuario-formulario">
          <h3>Introduce tus datos</h3>
          <div className="datos-personales">
            <label htmlFor="Nombre">
              Nombre <span className="asterisco-obligatorio">*</span>
            </label>
            <input
              className="input-datos-personales"
              type="text"
              id="Nombre"
              name="Nombre"
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
              required
            />
            <label htmlFor="Apellidos">
              Apellidos <span className="asterisco-obligatorio">*</span>
            </label>
            <input
              className="input-datos-personales"
              type="text"
              id="Apellidos"
              name="Apellidos"
              value={apellido}
              onChange={(e)=>setApellido(e.target.value)}
            />
            <label htmlFor="e-mail">
              E-mail <span className="asterisco-obligatorio">*</span>
            </label>
            <input
              className="input-datos-personales"
              type="email"
              id="e-mail"
              name="Correo"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="pais">
              País <span className="asterisco-obligatorio">*</span>
            </label>{" "}
            {/* Se establecerá mediante la base de datos todos los paises disponibles*/}
            <select className="input-datos-personales" name="pais" id="pais">
              <option value="España">España</option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="Francia">Francia</option>
            </select>
            <label htmlFor="telefono">
              Teléfono móvil <span className="asterisco-obligatorio">*</span>
            </label>
            <input
              className="input-datos-personales"
              type="tel"
              name="telefono"
              id="telefono"
              value={telefono}
              onChange={(e)=>setTelefono(e.target.value)}
            />
            <label htmlFor="creditCard">Credit Card <span className="asterisco-obligatorio">*</span></label>
            <input type="text"
             name="creditCard"
              id="creditCard" 
              pattern="[0-9]{16}"
              title="Debe contener solo número del 0 al 9 y un total de 16 créditos"
              value={creditCard}
              onChange={(e)=>setCreditCard(e.target.value)}
              required
               />
            <p>
              <input
                type="checkbox"
                name="confirmacion-dig"
                id="confirmacion-dig"
              />
              <label htmlFor="confirmacion-dig">
                Sí, quiero recibir la confirmación digital gratis (recomendado)
              </label>{" "}
              <br />
              <small>
                Te enviaremos un enlace por SMS para descargar la app
              </small>
            </p>
          </div>
          <section className="para-quien-reserva">
            <h4>Para quien es esta reserva?</h4>
            <input
              type="radio"
              name="tipoUsuario"
              defaultValue="Propietario"
            />{" "}
            Esta rerserva es para mí <br />
            <input
              type="radio"
              name="tipoUsuario"
              defaultValue="Arrendatario"
            />
            La reserva es para otra persona
          </section>
          <section className="viajar-por-trabajo">
            <h4>¿Viajas por trabajo?</h4>
            <input type="radio" name="vpt" id="si" defaultValue="Si" />
            <label htmlFor="si">Sí</label>
            <input type="radio" name="vpt" id="no" defaultValue="No" />
            <label htmlFor="no">No</label>
            <br />
          </section>
        </section>
        <section className="box-carrito">
          <h2>Revisar normas de la casa</h2>
          <ul className="lista-normas">
            <li>No se puede fumar</li>
            <li>No se pueden hacer fiestas/eventos</li>
            <li>MÁS INFORMACIÓN</li>
          </ul>
          <p className="remark">
            Al continuar, estás aceptando las normas de la casa
          </p>
        </section>
        <div className="botones-carrito-siguiente">
          <a className="box-carrito boton-bg-transparente" href="">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M.311 2.56v6.257a3.75 3.75 0 0 0 1.098 2.651l11.56 11.562a2.25 2.25 0 0 0 3.182 0l6.88-6.88a2.25 2.25 0 0 0 0-3.181L11.468 1.408A3.75 3.75 0 0 0 8.818.31H2.56a2.25 2.25 0 0 0-2.25 2.25zm1.5 0a.75.75 0 0 1 .75-.75h6.257a2.25 2.25 0 0 1 1.59.659l11.562 11.56a.75.75 0 0 1 0 1.06l-6.88 6.88a.75.75 0 0 1-1.06 0L2.47 10.409a2.25 2.25 0 0 1-.659-1.59V2.56zm5.25 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0z" />
              </svg>
            </span>
            Igualamos el precio
          </a>
          <button className="boton-bg-azul" type="submit">
            Siguiente: últimos datos
          </button>
        </div>
      </form>
    )
}