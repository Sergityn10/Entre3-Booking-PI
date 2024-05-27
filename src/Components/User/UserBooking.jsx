export function UserBooking({ propBooking }) {
    return (
        <>
            <section className="lugar-reserva">
                <h3>{propBooking.city}</h3>
                <div className="box-carrito">
                    <section className="info-lugar-reserva">
                        <h5 className="nom-lugar-strong">{propBooking.name}</h5>
                    </section>

                    <section className="card">
                        <h4>Alojamientos:</h4>
                    </section>
                    
                    <div className="precio-con-menu">
                        <h4>Precio total:</h4>
                        <p>{propBooking.totalPrice}</p>
                    </div>
                </div>
            </section>
        </>
    );
}
