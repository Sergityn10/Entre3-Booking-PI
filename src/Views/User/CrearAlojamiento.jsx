import React from "react";
import propertyService from "../../Controllers/propertyService";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

export const CrearAlojamiento = () => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate("/config/mis-alojamientos");
	};

	const { user, setUser, isLoggedIn, setIsLoggedIn } =
		useContext(UserContext);
	const idu = user.id;

	const createProperty = (e) => {
		e.preventDefault();
		console.log("Creando nuevo alojamiento");
		const property = {
			name: document.getElementById("nombre").value,
			idu: idu,
			city: document.getElementById("ciudad").value,
			address: document.getElementById("direccion").value,
			telephone: document.getElementById("telefono").value,
			centerDistance: document.getElementById("distancia").value,
			gradesAverage: document.getElementById("valoracion").value,
			description: document.getElementById("descripcion").value,
			available: document.getElementById("disponibilidad").value ? 1 : 0,
			petFriendly: document.querySelector(
				'input[name="mascotas"]:checked'
			).value
				? 1
				: 0,
			// Aquí puedes añadir otros campos necesarios para la creación de un nuevo alojamiento
		};

		propertyService.createProperty(property).then((response) => {
			// Navigate to /config/mis-alojamientos without recharging the page, using react-router
			handleNavigate();
		});
	};

	return (
		<form id="formulario-registro" action="" method="post" onSubmit={createProperty}>
			<h1>Crear Alojamiento</h1>

			<label htmlFor="nombre">
				<span>Nombre del Alojamiento</span>
			</label>
			<br />
			<input type="text" id="nombre" name="nombre" required/>
			<br />

			<label htmlFor="ciudad">
				<span>Ciudad</span>
			</label>
			<br />
			<input type="text" id="ciudad" name="ciudad" required/>
			<br />

			<label htmlFor="direccion">
				<span>Dirección</span>
			</label>
			<br />
			<input type="text" id="direccion" name="direccion" required/>
			<br />

			<label htmlFor="telefono">
				<span>Teléfono</span>
			</label>
			<br />
			<input type="tel" id="telefono" name="telefono" required/>
			<br />

			<label htmlFor="distancia">
				<span>Distancia al centro (metros)</span>
			</label>
			<br />
			<input type="number" id="distancia" name="distancia" required/>
			<br />

			<label htmlFor="valoracion">
				<span>Valoración media</span>
			</label>
			<br />
			<input type="number" id="valoracion" name="valoracion" step="0.1" required/>
			<br />

			<label htmlFor="descripcion">
				<span>Descripción</span>
			</label>
			<br />
			<textarea id="descripcion" name="descripcion"></textarea>
			<br />

			<div id="servicios">
				<span>Servicios e instalaciones:</span>

				<div className="contenedor-checkbox">
					<input
						type="checkbox"
						id="wifi"
						name="servicios"
						value="wifi"
					/>
					<label htmlFor="wifi">
						<span>Wifi</span>
					</label>
				</div>
				<div className="contenedor-checkbox">
					<input
						type="checkbox"
						id="parking"
						name="servicios"
						value="parking"
					/>
					<label htmlFor="parking">
						<span>Parking</span>
					</label>
				</div>
				<div className="contenedor-checkbox">
					<input
						type="checkbox"
						id="piscina"
						name="servicios"
						value="piscina"
					/>
					<label htmlFor="piscina">
						<span>Piscina</span>
					</label>
				</div>
			</div>

			<div id="mascotas">
				<span>¿Permite mascotas?</span>
				<input type="radio" id="si" name="mascotas" value="si" required/>
				<label htmlFor="si">
					<span>SÍ</span>
				</label>
				<input type="radio" id="no" name="mascotas" value="no" required/>
				<label htmlFor="no">
					<span>NO</span>
				</label>
				<input
					type="hidden"
					id="disponibilidad"
					name="disponibilidad"
					value="true"
				/>
			</div>

			<input
				type="submit"
				value="Crear Alojamiento"
				
			/>
		</form>
	);
};
