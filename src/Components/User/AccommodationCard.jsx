import { NavLink, useParams } from "react-router-dom";
export function AccommodationCard({ habitacion }) {
	const idAcomodation = habitacion.id;
	return (
		<>
			<div className="box-habitacion">
				<img
					className="imagen-habitacion"
					src="/img/Alojamientos/hotelLujo.jpg"
					alt="img-habitacion"
				/>
				<section className="atributos">
					<p className="nombre-hab">
						Nombre habitación: {habitacion.name}
					</p>
					<p>Descripción: {habitacion.description}</p>
					<p>Precio/noche: {habitacion.price}€</p>
					<p>
						Número de habitaciones disponibles:{" "}
						{habitacion.numAccommodations}
					</p>
					<div className="box-enlaces">
						<NavLink
							to={`/edit-acomodation/${idAcomodation}`}
							className="enlace-editar"
						>
							Editar habitación
						</NavLink>
						<NavLink
							to={`/delete-acomodation/${idAcomodation}`}
							className="enlace-eliminar"
						>
							Elimiar habitación
						</NavLink>
					</div>
				</section>
			</div>
		</>
	);
}
