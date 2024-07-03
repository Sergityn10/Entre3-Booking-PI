import propertyService from "../../Controllers/propertyService";
import { useNavigate } from "react-router-dom";

export function EditPropertyForm({ alojamiento }) {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate("/config/mis-alojamientos");
	};
	const updateProperty = (e) => {
		e.preventDefault();
		console.log("Actualizando alojamiento");
		const property = {
			id: alojamiento.id,
			name: document.getElementById("nombre").value,
			city: document.getElementById("ciudad").value,
			address: document.getElementById("direccion").value,
			telephone: document.getElementById("telefono").value,
			centerDistance: document.getElementById("distancia").value,
			gradesAverage: document.getElementById("valoracion").value,
			description: document.getElementById("descripcion").value,
			idu: alojamiento.idu,
			available: document.getElementById("disponibilidad").value,
		};

		propertyService.updateProperty(property).then((response) => {
			handleNavigate();
		});
	};

	return (
		<form class="formulario-alojamiento" action="" method="post">
			<h1>Edición Alojamiento</h1>

			<label htmlFor="nombre">
				<span>Nombre del Alojamiento</span>
			</label>
			<br />
			<input
				type="text"
				id="nombre"
				name="nombre"
				defaultValue={alojamiento.name}
			/>
			<br />

			<label htmlhtmlFor="ciudad">
				<span>Ciudad</span>
			</label>
			<br />
			<input
				type="text"
				id="ciudad"
				name="ciudad"
				defaultValue={alojamiento.city}
			/>
			<br />

			<label htmlhtmlFor="direccion">
				<span>Dirección</span>
			</label>
			<br />
			<input
				type="text"
				id="direccion"
				name="direccion"
				defaultValue={alojamiento.address}
			/>
			<br />

			<label htmlFor="telefono">
				<span>Teléfono</span>
			</label>
			<br />

			<input
				type="tel"
				id="telefono"
				name="telefono"
				defaultValue={alojamiento.telephone}
			/>
			<br />

			<label htmlFor="distancia">
				<span>Distancia al centro (metros)</span>
			</label>
			<br />
			<input
				type="number"
				id="distancia"
				name="distancia"
				defaultValue={alojamiento.centerDistance}
			/>
			<br />

			<label htmlFor="valoracion">
				<span>Valoración media</span>
			</label>
			<br />
			<input
				type="number"
				id="valoracion"
				name="valoracion"
				step="0.1"
				defaultValue={alojamiento.gradesAverage}
			/>
			<br />

			<label htmlFor="descripcion">
				<span>Descripción</span>
			</label>
			<br />

			<textarea id="descripcion" name="descripcion">
				{alojamiento.description}
			</textarea>
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
				<input type="radio" id="si" name="mascotas" value="si" />
				<label htmlFor="si">
					<span>SÍ</span>
				</label>
				<input type="radio" id="no" name="mascotas" value="no" />
				<label htmlFor="no">
					<span>NO</span>
				</label>
				<input
					type="hidden"
					id="disponibilidad"
					name="disponibilidad"
					defaultValue={alojamiento.available}
				/>
			</div>

			<input
				type="submit"
				value="Confirmar cambios"
				onClick={updateProperty}
			/>
		</form>
	);
}
