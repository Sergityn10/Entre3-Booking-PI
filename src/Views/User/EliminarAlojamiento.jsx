import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import propertyService from "../../Controllers/propertyService";
// import "./../../css/editarAlojamiento.css";

export function EliminarAlojamiento() {
	const { idProperty } = useParams();
	const [alojamiento, setAlojamiento] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		propertyService.getProperty(idProperty).then((response) => {
			console.log("recupera alojamiento", response);
			setAlojamiento(response);
			setLoading(false);
		});
	}, [idProperty]);

	const deleteProperty = (e) => {
		e.preventDefault();
		propertyService.deleteProperty(idProperty).then(() => {
			navigate("/config/mis-alojamientos");
		});
	};

	if (loading) return <h1>Cargando...</h1>;

	return (
		<div id="main">
			<div id="contenedor-central">
				<form id="formulario-registro" action="" method="post">
					<h1>¿Eliminar Alojamiento?</h1>

					<label htmlFor="nombre">
						<span>Nombre del Alojamiento</span>
					</label>
					<br />
					<input
						type="text"
						id="nombre"
						name="nombre"
						value={alojamiento.name}
						readOnly
					/>
					<br />

					<label htmlFor="ciudad">
						<span>Ciudad</span>
					</label>
					<br />
					<input
						type="text"
						id="ciudad"
						name="ciudad"
						value={alojamiento.city}
						readOnly
					/>
					<br />

					<label htmlFor="direccion">
						<span>Dirección</span>
					</label>
					<br />
					<input
						type="text"
						id="direccion"
						name="direccion"
						value={alojamiento.address}
						readOnly
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
						value={alojamiento.telephone}
						readOnly
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
						value={alojamiento.centerDistance}
						readOnly
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
						value={alojamiento.gradesAverage}
						readOnly
					/>
					<br />

					<label htmlFor="descripcion">
						<span>Descripción</span>
					</label>
					<br />
					<textarea
						id="descripcion"
						name="descripcion"
						value={alojamiento.description}
						readOnly
					></textarea>
					<br />

					<div id="servicios">
						<span>Servicios e instalaciones:</span>

						<div className="contenedor-checkbox">
							<input
								type="checkbox"
								id="wifi"
								name="servicios"
								value="wifi"
								readOnly
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
								readOnly
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
								readOnly
							/>
							<label htmlFor="piscina">
								<span>Piscina</span>
							</label>
						</div>
					</div>

					<div id="mascotas">
						<span>¿Permite mascotas?</span>
						<input
							type="radio"
							id="si"
							name="mascotas"
							value="si"
							checked={alojamiento.petsAllowed}
							readOnly
						/>
						<label htmlFor="si">
							<span>SÍ</span>
						</label>
						<input
							type="radio"
							id="no"
							name="mascotas"
							value="no"
							checked={!alojamiento.petsAllowed}
							readOnly
						/>
						<label htmlFor="no">
							<span>NO</span>
						</label>
					</div>

					<input
						type="submit"
						value="Confirmar Eliminar"
						onClick={deleteProperty}
					/>
				</form>
			</div>
		</div>
	);
}
