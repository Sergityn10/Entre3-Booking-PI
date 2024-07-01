import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ReviewForm } from "../../Components/Forms/ReviewForm"
import { ListReviews } from "../../Components/Reviews/ListReviews"
import Loading from "../../Components/Loading"
import './../../css/detalleAlojamiento.css'
import reviewService from "../../Controllers/reviewController"
import propertyService from "../../Controllers/propertyService"
import accommodationService from "../../Controllers/accommodationService"
import { ReserveAccommodation } from "../../Components/Properties/ReserveAccommodation"
import { useContext } from "react"
import ShoppingCartContext from "../../context/ShoppingCartContext"
export function DetailProperty(){
    const {idProperty} = useParams();
    const {books, setBooks} = useContext(ShoppingCartContext)
    const [alojamiento,setProperty] = useState()
    const [reviews, setReviews] = useState([])
    const [accommodations, setAccommodations] = useState([])
    const [loading, setLoading] = useState(true);

    
    useEffect(() =>{
        
        propertyService.getProperty(idProperty).then((response) =>{
            setProperty(response)
            
        })
        reviewService.getAllREviewsByIdp(idProperty).then((response)=>{
            setReviews(response)
            console.log(response)
        })
        accommodationService.getAccommodationsByIdp(idProperty).then((response)=>{
            setAccommodations(response)
            console.log(response)
        })
        reviewService.getAllReviewsByUser(user.id).then((response)=>{
            setReviews(response)
            
        }).finally(setLoading(false))
        setBooks([])
        setTimeout(()=>setLoading(false),2000 )     
    }, [idProperty])

    return(
        <>
        {loading ? <Loading/> : <>
            <div id="main">

                <div id="enlace-secciones">
                    <a href=""><span>Vista general</span></a>
                    <a href=""><span>Info y precios</span></a>
                    <a href=""><span>Servicios</span></a>
                    <a href=""><span>Léeme</span></a>
                    <a href=""><span>A tener en cuenta</span></a>
                    <a href=""><span>Comentarios de clientes</span></a>
                </div>

        <hr className="separator"/>

        
        <div id="main-superior">
            <div id="superior-izq">
                <div className="recuadro">
                    <h2>Buscar</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Destino/Nombre del alojamiento:</label>
                            <input type="text" id="name" name="name" value="Cáceres"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="llegada">Fecha de entrada</label>
                            <input type="date" id="llegada" name="llegada" placeholder="Fecha llegada"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="salida">Fecha de salida</label>
                            <input type="date" id="salida" name="salida" placeholder="Fecha salida"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="adultos">Número de adultos:</label>
                            <input type="number" id="adultos" name="adultos" placeholder="Adultos"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="menores">Número de menores:</label>
                            <input type="number" id="menores" name="menores" placeholder="Menores"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="habitaciones">Número de habitaciones:</label>
                            <input type="number" id="habitaciones" name="habitaciones" placeholder="Habitaciones"/>
                        </div>
                        <div className="form-group-check">
                            <input type="checkbox" id="casas-apartamentos" name="casas-apartamentos"/>
                            <label htmlFor="casas-apartamentos">Casas y apartamentos enteros</label>
                        </div>
                        <div className="form-group-check">
                            <input type="checkbox" id="viajo-trabajo" name="viajo-trabajo"/>
                            <label htmlFor="viajo-trabajo">Viajo por trabajo</label>
                        </div>
                        <div className="form-group-check">
                            <input type="checkbox" id="necesito-parking" name="necesito-parking"/>
                            <label htmlFor="necesito-parking">Necesito parking</label>
                        </div>
                        <button type="submit"><span>Buscar</span></button>
                    </form>
                </div>

            </div>
    

        </div>

        <hr className="separator"/>

            <div id="superior-dcha">
                <div id="nombre-alojamiento">
                    <h1>{alojamiento.name}</h1>
                    <button id="reservar-boton"><span>Reservar ahora</span></button>
                </div>
                <div id="info-superior">
                        <span id="direccion">{alojamiento.address} - <a href="">Ubicación Excelente - Ver Mapa</a></span>
                        <span id="valorAvern">{alojamiento.gradesAverage}</span>

                </div>
                <div id="grid-fotos">
                    <img src="img/Alojamientos/hotel1.jpg" alt="Foto hotel"/>
                    <img src="img/Alojamientos/hotel2.jpg" alt="Foto hotel"/>
                    <img src="img/Alojamientos/hotel3.jpg" alt="Foto hotel"/>
                    <div id="carrusel-fotos">
                        <img src="img/Alojamientos/hotel4.jpg" alt="Foto hotel"/>
                        <img src="img/Alojamientos/hotel5.jpg" alt="Foto hotel"/>
                        <img src="img/Alojamientos/hotel6.jpg" alt="Foto hotel"/>
                        <img src="img/Alojamientos/hotel7.jpg" alt="Foto hotel"/>
                        <img src="img/Alojamientos/hotel8.jpg" alt="Foto hotel"/>
                        <img src="img/Alojamientos/hotel8.jpg" alt="Foto hotel"/>
                    </div>


                </div>

            </div>
        

        <div id="main-inferior">
            <div id="parrafos-info">
                <p>Contáctanos: <a href={`tel:${alojamiento.telephone}`} >{alojamiento.telephone}</a></p>
                <p>DESCRIPCIÓN DINÁMICA: {alojamiento.description}</p>
                </div>
            <div id="mas-informacion">
                <h3>Puntos fuertes del alojamiento</h3>
                <p>Situado en la zona mejor valorada de Cáceres, este hotel tiene una excelente puntuación en ubicación (9,6).</p>
                <h4>Más servicios ofrecidos</h4>
                <div className="elem-info">
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path>
                        </svg></span>
                    <span>Parking propio</span>
                </div>
                <div className="elem-info">
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z"></path>
                        </svg></span>
                    <span>WiFi gratis</span>
                </div>
                <div className="elem-info">
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M6 .75v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zm4.28 2.47l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l3-3H6.22l3 3a.75.75 0 1 0 1.06-1.06zM18 6.75v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm1.72-3.53l-3 3h1.06l-3-3a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06zM22.5 16.5v5.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v5.25zm1.5 0v-5.25A2.25 2.25 0 0 0 21.75 9H2.25A2.25 2.25 0 0 0 0 11.25v10.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75V16.5zM9 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm1.5 7.5a4.5 4.5 0 1 0-9 0v.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-.75zm-1.5 0v.75l.75-.75h-7.5l.75.75v-.75a3 3 0 1 1 6 0zM18 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm1.5 7.5a4.5 4.5 0 1 0-9 0v.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-.75zm-1.5 0v.75l.75-.75h-7.5l.75.75v-.75a3 3 0 1 1 6 0z"></path>
                        </svg></span>
                    <span>Ascensor</span>
                </div>
                <div className="elem-info">
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M3.75 4.5h12a.75.75 0 0 1 .75.75v7.5a6.75 6.75 0 0 1-13.5 0v-7.5a.75.75 0 0 1 .75-.75zm0-1.5A2.25 2.25 0 0 0 1.5 5.25v7.5a8.25 8.25 0 0 0 16.5 0v-7.5A2.25 2.25 0 0 0 15.75 3h-12zm-3 18h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm16.5-15h1.5a3.763 3.763 0 0 1 3.75 3.752 3.762 3.762 0 0 1-3.752 3.748H17.1a.75.75 0 0 0 0 1.5h1.65A5.263 5.263 0 0 0 24 9.752 5.264 5.264 0 0 0 18.752 4.5H17.25a.75.75 0 0 0 0 1.5z"></path>
                        </svg></span>
                    <span>Desayuno incluido</span>
                </div>

                
                
                
            </div>
            </div>
            <div id="seccion-tabla">
                <div id="titulo-seccion-tabla">
                <h2>Disponibilidad</h2>
                <a href="">Igualamos el precio</a>
                </div>
           <ReserveAccommodation accommodations={accommodations}/>
        </div>
        
            <section id="container-create-review">
                <h3>Reviews de usuarios sobre este alojamiento</h3>
                <ListReviews listReviews={reviews}/>
                <ReviewForm alojamiento={alojamiento} setListReviews={setReviews} />
            </section>
           
        </div>
        </> 
        }

        </>

    )

    
}

    
        

        




        

        

       
        


   