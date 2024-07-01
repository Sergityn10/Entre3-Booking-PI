import { NavLink } from "react-router-dom";
import propertyService from "../../Controllers/propertyService";
export function MyProperty({ alojamiento }) {
	const changeAvailable = ()=>{

		
		propertyService.changeDisponibility(alojamiento)
	}
    return (
		<>
			<section className="lugar-reserva">
				<h3>{alojamiento.city}</h3>
				<div className="box-carrito">
					<img
						src="/img/Lugares/caceres.jpg"
						alt="imagen-sobre-lugar"
					/>

					<section className="info-lugar-reserva">
						<h5 className="nom-lugar-strong">{alojamiento.name}</h5>
						{alojamiento.available === 1 ? (
							<p>DISPONIBLE</p>
						) : (
							<p>NO DISPONIBLE</p>
						)}
					</section>

					<div className="precio-con-menu">
					<button onClick={changeAvailable} >Cambiar disponibilidad</button>
						<NavLink to={`/habitaciones-alojamiento/${alojamiento.id}`} className="boton-bg-azul">
							Ver habitaciones
						</NavLink>
						<NavLink
							to={`/edit-property/${alojamiento.id}`}
							className="boton-bg-azul"
						>
							Editar
						</NavLink>
						<NavLink to={`/delete-property/${alojamiento.id}`}>
							<img
								alt="Eliminar propiedad registrada"
								src="/img/Iconos/delete.png"
							/>
						</NavLink>
					</div>
				</div>
			</section>
		</>
	);
}
