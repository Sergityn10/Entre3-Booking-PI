export function UserBooking({ propBooking }) {
    return (
        <>
            <section className="lugar-reserva">
                <h3>{propBooking.key.city}</h3>
                <div className="box-carrito">
                    <section className="info-lugar-reserva">
                        <h5 className="nom-lugar-strong">{propBooking.key.name}</h5>
                    </section>

                    <section className="card">
                        <h4>Alojamientos:</h4>
                    </section>
                    
                    <div className="precio-con-menu">
                        <h4>Precio total:</h4>
                        <p>{propBooking.value.totalPrice}</p>
                    </div>
                </div>
            </section>
        </>
    );
}
