
export function CardFavorite({alojamiento}){

    return(
        <>
            <section className="lugar-reserva">
                <h3>{alojamiento.city}</h3>
                <div className="box-carrito">
                    <img src={`${process.env.PUBLIC_URL}/img/Lugares/caceres.jpg`} alt="imagen-sobre-lugar" />

                    <section className="info-lugar-reserva">

                        <h5 className="nom-lugar-strong">{alojamiento.name}</h5>
                        {alojamiento.available === 1 ? (
                            <p>DISPONIBLE</p>
                        ) : (
                            <p>NO DISPONIBLE</p>
                        )}
                    </section>

                    <div className="precio-con-menu">
                        <input className="menu" type="image" src={`${process.env.PUBLIC_URL}/img/Iconos/delete.png`} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}