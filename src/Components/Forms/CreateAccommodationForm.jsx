export function CreateAccommodationForm(alojamiento){
    return (
            <form id="añadir-habitacion" action="" method="post">
                <label for="nombre"><span>Nombre</span></label><br/>
                <input type="text" id="nombre" name="nombre"/><br/>

                <label for="descripcion-hab"><span>Descripción</span></label><br/>
                <textarea id="descripcion-hab" name="descripcion-hab"></textarea><br/>

                <label for="precio-hab"><span>Precio</span></label><br/>
                <input type="number" id="precio-hab" name="precio-hab" step="1"/><br/>
                
                <label for="disponibles"><span>Nº habitaciones disponibles</span></label><br/>
                <input type="number" id="disponibles" name="disponibles" step="1"/><br/>
                
                <input type="submit" value="Añadir habitación"/>
            </form>    
    )
}