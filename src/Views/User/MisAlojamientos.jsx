import { useEffect, useState } from "react";
import React from "react";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ListOwnProperties } from "../../Components/User/ListOwnProperties";
import "./../../css/listaAlojamientos.css"
import styles from "./../../css/style-reservas.module.css"
import propertyService from "../../Controllers/propertyService";

export function MisAlojamientos() {
	const { user, setUser, isLoggedIn, setIsLoggedIn } =
		useContext(UserContext);
	const [listaPropiedades, setListaPropiedades] = useState([]);

	useEffect(() => {
		propertyService.getAllbyUser(user.id).then((response) => {
			setListaPropiedades(response);
			console.log(response);
		});
	}, []);
	//En los corchetes se pone la dependencia, cuando se quiere que se ejecute otra vez la consulta
	//En este caso, cada vez que se renderice (solo una vez), así que no hay que poner nada

	return (
		<div className={styles["container-config"]}>
			<section id={styles["reservas"]}>
				<h2>Tus alojamientos registrados</h2>
				<NavLink to="/create-property/">Añadir nueva propiedad</NavLink>
			</section>

			<ListOwnProperties listOwnProperties={listaPropiedades} setListaPropiedades={setListaPropiedades}/>
		</div>
	);
}
