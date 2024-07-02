import { useEffect } from "react"
import { useState } from "react"
import propertyService from "../../Controllers/propertyService"
import favoritesService from "../../Controllers/favoritesService"
import Loading from "../Loading"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../../context/UserContext"
import FavoriteContext from "../../context/FavoriteContext"


export function UserFavorite({ favorito, index }) {
	
	const {user} = useContext(UserContext)
	const {propsFavorites,setPropsFavorites} = useContext(FavoriteContext)
	const [alojamiento, setAlojamiento] = useState(null)
	const [loading, setLoading] = useState(true)
	
	useEffect(()=>{
		propertyService.getProperty(favorito.idp).then((response)=>{
			setAlojamiento(response)
			
		})
		setLoading(false)
	},[])

	const handleDelete = ()=>{
		
		
			
		favoritesService.deleteFavorite(favorito.idu, favorito.idp).then((response)=>{
			favoritesService.getAllFavoritesByUser(user.id).then((resp)=>{
				setPropsFavorites(resp)
			})
			
		})
		
		
			
			
		
		
			
	}
	
	return (
		<>
		{loading || !alojamiento? <Loading/> :
				<section className="lugar-reserva">
					<h3>{alojamiento.name}-{alojamiento.city}</h3>
					<div className="box-carrito">
					
						<img src={`${process.env.PUBLIC_URL}/img/Lugares/caceres.jpg`} alt="imagen-sobre-lugar" />
						<section className="info-lugar-reserva">
							<NavLink to={`/property/${alojamiento.id}`}><h5 className="nom-lugar-strong">{alojamiento.name}</h5></NavLink>

							{alojamiento.available === 1 ? (
								<p>DISPONIBLE</p>
							) : (
								<p>NO DISPONIBLE</p>
							)}
						</section>

						<div className="precio-con-menu">

							
								<input className="menu" type="image" src={`${process.env.PUBLIC_URL}/img/Iconos/delete.png`} alt="" onClick={handleDelete}/>
							

						</div>

					</div>

				</section>
			}

		</>
	)
}