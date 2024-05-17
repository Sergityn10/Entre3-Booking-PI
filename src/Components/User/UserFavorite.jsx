
export function UserFavorite({alojamiento}){
    return (
        <>
                    <section class="lugar-reserva">
	            		<h3>{alojamiento.city}</h3>
			                <div class="box-carrito">
		                    <img src="img/caceres.jpg" alt="imagen-sobre-lugar"/>
		                    <section class="info-lugar-reserva">
		                        <h5 class="nom-lugar-strong">{alojamiento.name}</h5>

                                {alojamiento.available === 1 ? (
                                    <p>DISPONIBLE</p>
                                ) : (
                                    <p>NO DISPONIBLE</p>
                                )}
		                    </section>

		                    <div class="precio-con-menu">
		                        
		                       <form method="post" action="deleteFavoritePropertyUserServlet.do?idp=${alojamiento.id}">
		                       		<input class="menu" type="image" src="${pageContext.request.contextPath}/img/Iconos/delete.png" alt=""/>
		                       </form>
		                           
		                    </div>
		                    
		                </div>
	                
	            	</section>  
        
        </>
    )
}