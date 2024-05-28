import { useEffect } from "react"

export function UserFavorite({ alojamiento }) {
	
	
	return (
		<>
			<section className="lugar-reserva">
				<h3>{alojamiento.city}</h3>
				<div className="box-carrito">
					<img src="img/caceres.jpg" alt="imagen-sobre-lugar" />
					<section className="info-lugar-reserva">
						<h5 className="nom-lugar-strong">{alojamiento.name}</h5>

						{alojamiento.available === 1 ? (
							<p>DISPONIBLE</p>
						) : (
							<p>NO DISPONIBLE</p>
						)}
					</section>

					<div className="precio-con-menu">

						<form method="post" action="deleteFavoritePropertyUserServlet.do?idp=${alojamiento.id}">
							<input className="menu" type="image" src="../../public/img/Iconos/delete.png" alt="" />
						</form>

					</div>

				</div>

			</section>

		</>
	)
}