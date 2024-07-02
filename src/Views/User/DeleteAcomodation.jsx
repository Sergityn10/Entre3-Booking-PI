import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import accommodationService from "../../Controllers/accommodationService";
import "./../../css/eliminarUsuario.css";

export function DeleteAcomodation() {
	const { idAcomodation } = useParams();
	const [habitacion, setHabitacion] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		accommodationService.getAccommodationByIda(idAcomodation).then((response) => {
			console.log("recupera habitación", response);
			setHabitacion(response);
			setLoading(false);
		});
	}, [idAcomodation]);


	const deleteAcomodation = (e) => {
		e.preventDefault();
		accommodationService.deleteAccommodation(idAcomodation).then(() => {
			navigate("/config/mis-alojamientos");
		});
	}


	if (loading) return <h1>Cargando...</h1>;

	return (
		<div id="main">
			<div id="contenedor-central">
				
				<h1>Eliminar habitación: {habitacion.name}</h1>

				<p className="p-aux">Información que se va a eliminar:</p>

				<p className="datos">Nombre: <span className="resaltado">{habitacion.name}</span></p>
				<p className="datos">Descripción: <span className="resaltado">{habitacion.description}</span></p>
				<p className="datos">Precio: <span className="resaltado">{habitacion.price}</span></p>
				<p className="datos">Nº habitaciones disponibles: <span className="resaltado">{habitacion.numAccommodations}</span></p>            

				<p className="p-aux">¿Estás seguro de que quieres eliminar la habitaón? Esta acción es irreversible</p>

				<form action="DeleteAccommodationServlet.do" method="post">
					<p><input type="submit" value="Eliminar habitación" onClick={deleteAcomodation}/></p>
				</form>
				
			</div>

		</div>
	)
}
