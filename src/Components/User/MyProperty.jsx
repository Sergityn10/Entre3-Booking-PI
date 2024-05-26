
export function MyProperty({ alojamiento }) {
    return (
        <>
            <section className="lugar-reserva">
                <h3>{alojamiento.city}</h3>
                <div className="box-carrito">
                    <img src="img/Lugares/caceres.jpg" alt="imagen-sobre-lugar" />

                    <section className="info-lugar-reserva">

                        <h5 className="nom-lugar-strong">{alojamiento.name}</h5>
                        {alojamiento.available === 1 ? (
                            <p>DISPONIBLE</p>
                        ) : (
                            <p>NO DISPONIBLE</p>
                        )}
                    </section>

                    <div className="precio-con-menu">
                        <a href="" className="boton-bg-azul">Cambiar estado del alojamiento</a>
                        <a href="" className="boton-bg-azul">Editar</a>
                        <a href=""><img alt="Eliminar propiedad registrada" src="img/Iconos/delete.png" /></a>
                    </div>
                </div>
            </section>
        </>
    );
}
