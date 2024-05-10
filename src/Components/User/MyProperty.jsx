
export function MyProperty({alojamiento}){
    return(
        <>
            <section class="lugar-reserva">
                <h3>${alojamiento.city}</h3>
                    <div class="box-carrito">
                    <img src="img/caceres.jpg" alt="imagen-sobre-lugar"/>
                    <section class="info-lugar-reserva">
                        <h5 class="nom-lugar-strong">${alojamiento.name }</h5>
                        <c:choose>
                            <c:when test="${alojamiento.available==1 }"><p>DISPONIBLE</p></c:when>
                            <c:otherwise><p>NO DISPONIBLE</p></c:otherwise>
                        </c:choose>
                    </section>
                    <div class="precio-con-menu">
                        
                        <a href = "${pageContext.request.contextPath}/properties/EditAvailablePropertyServlet.do?idp=${alojamiento.id}" class="boton-bg-azul">Cambiar estado del alojamiento</a>
                        <a href = "${pageContext.request.contextPath}/EditPropertyServlet.do?idp=${alojamiento.id}" class="boton-bg-azul">Editar</a>
                        <a href="${pageContext.request.contextPath}/DeletePropertyServlet.do?idp=${alojamiento.id}"><img alt="Eliminar propiedad registrada" src="${pageContext.request.contextPath}/img/Iconos/delete.png"/></a>
                        
                        
                    </div>
                    
                </div>
            
            </section>
        
        </>

    );
}