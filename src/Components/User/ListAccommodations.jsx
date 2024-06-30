import React from "react";

import { AccommodationCard } from "./AccommodationCard";
import "./../../css/style-reservas.css";

export function ListAccommodations({ listPropertyAccomodations }) {
	console.log(listPropertyAccomodations);

	if (listPropertyAccomodations.length === 0) {
		return <h1>No hay habitaciones disponibles</h1>;
	} else if (listPropertyAccomodations === undefined) {
		return <h1>Cargando...</h1>;
	}
    else if (!Array.isArray(listPropertyAccomodations)) {
        console.log("No es un array: ", listPropertyAccomodations);
		return <AccommodationCard habitacion={listPropertyAccomodations} key={listPropertyAccomodations.id}/>;
	} else
		return (
			<>
				{listPropertyAccomodations.map((accommodation) => (
					<AccommodationCard
						habitacion={accommodation}
						key={accommodation.id}
					/>
				))}
			</>
		);
}
