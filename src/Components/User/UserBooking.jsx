
export function UserBooking(reserva){
    return (
        <>
            <section class="lugar-reserva">
	            <h3>${propBooking.key.city} </h3>
			        <div class="box-carrito">
		                    
                        <section class="info-lugar-reserva">
                            <h5 class="nom-lugar-strong"> ${propBooking.key.name}</h5> 
                        </section>

                        <section class="card">
                                <h4>Alojamientos:</h4>   
                        </section>
                        
                        <div class="precio-con-menu">    
                            <h4>Precio total:</h4>
                            <p>${propBooking.value.totalPrice}</p>
                        </div>
		                    
		            </div>
	                
	        </section>   
        
        </>
    )
}