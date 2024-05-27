
export function AccommodationCard({ habitacion }) {
    return (
        <>
           <div class="box-habitacion">
	                <img  class="imagen-habitacion" src="/img/Alojamientos/hotelLujo.jpg" alt="img-habitacion"/>
	                <section class="atributos">
	                    <p class="nombre-hab">Nombre habitación: ${habitacion.name}</p>
	                    <p>Descripción: {habitacion.description}</p>
	                    <p>Precio/noche: {habitacion.price}€</p>
	                    <p>Número de habitaciones disponibles: {habitacion.numAccommodations}</p>
	                    <div class="box-enlaces">
	                        <a class="enlace-editar" href="">Editar habitación</a>
	                        <a class="enlace-eliminar" href="">Eliminar habitación</a>
                    	</div>
	                </section>
            	</div>		
        </>
    );
}
