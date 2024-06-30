import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import accommodationService from "../../Controllers/accommodationService";
import "./../../css/editarAlojamiento.css";
import { useNavigate } from "react-router-dom";

export const EditAcomodation = () => {
	const { idAcomodation } = useParams();
	const [accommodation, setAccommodation] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
    const handleNavigate = () => {
		const url = "/habitaciones-alojamiento/" + accommodation.idp;
		navigate(url);
	};

	useEffect(() => {
		accommodationService.getAccommodations().then((response) => {
			const selectedAccommodation = response.find(
				(accommodation) => accommodation.id === parseInt(idAcomodation)
			);
			console.log("recupera alojamiento", selectedAccommodation);
			setAccommodation(selectedAccommodation);
			setLoading(false);
		});
	}, [idAcomodation]);

	const updateAccommodation = (e) => {
        e.preventDefault();
		accommodationService
			.updateAccommodation(accommodation)
			.then((response) => {
				console.log("Alojamiento actualizado", response);
				handleNavigate();
			})
			.catch((error) => {
				console.error("Error actualizando alojamiento", error);
			});
	};

	if (loading) return <h1>Cargando...</h1>;

	return (
		<>
			{accommodation && (
				<div id="main">
					<div id="contenedor-central">
						<form
							id="formulario-registro"
							onSubmit={updateAccommodation}
						>
							<h1>Edición Habitación</h1>

							<label htmlFor="name">
								<span>Nombre de la Habitación</span>
							</label>
							<br />
							<input
								type="text"
								id="name"
								name="name"
								value={accommodation.name}
								onChange={(e) =>
									setAccommodation({
										...accommodation,
										name: e.target.value,
									})
								}
							/>
							<br />

							<label htmlFor="description">
								<span>Descripción</span>
							</label>
							<br />
							<textarea
								id="description"
								name="description"
								value={accommodation.description}
								onChange={(e) =>
									setAccommodation({
										...accommodation,
										description: e.target.value,
									})
								}
							/>
							<br />

							<label htmlFor="price">
								<span>Precio/noche</span>
							</label>
							<br />
							<input
								type="number"
								id="price"
								name="price"
								value={accommodation.price}
								onChange={(e) =>
									setAccommodation({
										...accommodation,
										price: parseFloat(e.target.value),
									})
								}
							/>
							<br />

							<label htmlFor="numAccommodations">
								<span>Número de habitaciones disponibles</span>
							</label>
							<br />
							<input
								type="number"
								id="numAccommodations"
								name="numAccommodations"
								value={accommodation.numAccommodations}
								onChange={(e) =>
									setAccommodation({
										...accommodation,
										numAccommodations: parseInt(
											e.target.value
										),
									})
								}
							/>
							<br />

							<input
								type="submit"
								value="Confirmar cambios"
								className="btn-guardar"
							/>
						</form>
					</div>
				</div>
			)}
		</>
	);
};
