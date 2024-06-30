import { useEffect } from "react"
import { useState } from "react"
import propertyService from "../../Controllers/propertyService"
import favoritesService from "../../Controllers/favoritesService"
import Loading from "../Loading"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
export function UserFavorite({ favorito }) {
	
	const [alojamiento, setAlojamiento] = useState(null)
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()
	useEffect(()=>{
		propertyService.getProperty(favorito.idp).then((response)=>{
			setAlojamiento(response)
			
		})
		setLoading(false)
	},[])

	const handleDelete = ()=>{
		setLoading(true)
		favoritesService.deleteFavorite(favorito.idu, favorito.idp)
		.catch((erro) => console.error(erro)).finally(setLoading(false))
	}
	
	return (
		<>
		{loading || !alojamiento? <Loading/> :
				<section className="lugar-reserva">
					<h3>{alojamiento.name}-{alojamiento.city}</h3>
					<div className="box-carrito">
						<img src="img/caceres.jpg" alt="imagen-sobre-lugar" />
						<section className="info-lugar-reserva">
							<NavLink to={`/property/${alojamiento.id}`}><h5 className="nom-lugar-strong">{alojamiento.name}</h5></NavLink>

							{alojamiento.available === 1 ? (
								<p>DISPONIBLE</p>
							) : (
								<p>NO DISPONIBLE</p>
							)}
						</section>

						<div className="precio-con-menu">

							
								<input className="menu" type="image" src="../../img/Iconos/delete.png" alt="" onClick={handleDelete}/>
							

						</div>

					</div>

				</section>
			}

		</>
	)
}