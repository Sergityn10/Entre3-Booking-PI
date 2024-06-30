import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import accommodationService from "../../Controllers/accommodationService";
import { useParams } from "react-router-dom";

export function CreateAccommodationForm({ alojamiento }) {
    const idp = alojamiento.id;
	const [accommodation, setAccommodation] = useState({
		name: "",
		description: "",
		price: "",
		numAccommodations: "",
		idp: parseInt(idp),
	});

	const navigate = useNavigate();
    const handleNavigate = () => {
        const url = "/habitaciones-alojamiento/" + idp;
		navigate(url);
	};

	const createAccommodation = (e) => {
		e.preventDefault();
		accommodationService
			.createAccommodation(accommodation)
			.then((response) => {
				console.log("Alojamiento creado", response);
				handleNavigate();
			})
			.catch((error) => {
				console.error("Error creando alojamiento", error);
			});
	};
	return (
		<form id="añadir-habitacion" onSubmit={createAccommodation}>
			<h1>Agregar Habitación</h1>

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
						numAccommodations: parseInt(e.target.value),
					})
				}
			/>
			<br />

			<input
				type="submit"
				value="Crear habitación"
				className="btn-guardar"
			/>
		</form>
	);
}
