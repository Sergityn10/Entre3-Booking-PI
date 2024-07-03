import { NavLink } from "react-router-dom";
import propertyService from "../../Controllers/propertyService";
import styles from "./../../css/style-reservas.module.css"
export function MyProperty({ alojamiento,changeAvailable }) {
	
    return (
		<>
			<section className={styles["lugar-reserva"]}>
				<h3>{alojamiento.city}</h3>
					<div className={styles["box-carrito"]}>
				
					<img
						src={`${process.env.PUBLIC_URL}/img/Lugares/caceres.jpg`}
						alt="imagen-sobre-lugar"
					/>

					<section className={styles["info-lugar-reserva"]}>

						<h5 className={styles["nom-lugar-strong"]}>{alojamiento.name}</h5>
						{alojamiento.available === 1 ? (
							<p>DISPONIBLE</p>
						) : (
							<p>NO DISPONIBLE</p>
						)}
					</section>

					<div className={styles["precio-con-menu"]}>
					<button className="boton-bg-azul" onClick={()=>changeAvailable(alojamiento)} >Cambiar disponibilidad</button>
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
								src={`${process.env.PUBLIC_URL}/img/Iconos/delete.png`}
							/>
						</NavLink>
					</div>
				</div>
			</section>
		</>
	);
}
