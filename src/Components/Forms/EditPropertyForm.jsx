export function EditPropertyForm({alojamiento}){
    return (     
        <form id="formulario-registro" action="" method="post">
            <h1>Edición Alojamiento</h1>

            <label htmlhtmlFor="nombre"><span>Nombre del Alojamiento</span></label><br/>
            <input type="text" id="nombre" name="nombre" value={alojamiento.name}/><br/>

            <label htmlhtmlFor="ciudad"><span>Ciudad</span></label><br/>
            <input type="text" id="ciudad" name="ciudad" value={alojamiento.city}/><br/>


            <label htmlhtmlFor="direccion"><span>Dirección</span></label><br/>
            <input type="text" id="direccion" name="direccion" value={alojamiento.address}/><br/>

            <label htmlFor="telefono"><span>Teléfono</span></label><br/>

            <input type="tel" id="telefono" name="telefono" value={alojamiento.telephone}/><br/>

            <label htmlFor="distancia"><span>Distancia al centro (metros)</span></label><br/>
            <input type="number" id="distancia" name="distancia" value={alojamiento.centerDistance}/><br/>


            <label htmlFor="valoracion"><span>Valoración media</span></label><br/>
            <input type="number" id="valoracion" name="valoracion" step="0.1" value={alojamiento.gradesAverage}/><br/>

            <label htmlFor="descripcion"><span>Descripción</span></label><br/>

            <textarea id="descripcion" name="descripcion">{alojamiento.description}</textarea><br/>

            <div id="servicios">
                <span>Servicios e instalaciones:</span>

                <div className="contenedor-checkbox">
                    <input type="checkbox" id="wifi" name="servicios" value="wifi"/>
                    <label htmlFor="wifi"><span>Wifi</span></label>
                </div>
                <div className="contenedor-checkbox">
                    <input type="checkbox" id="parking" name="servicios" value="parking"/>
                    <label htmlFor="parking"><span>Parking</span></label>
                </div>
                <div className="contenedor-checkbox">
                    <input type="checkbox" id="piscina" name="servicios" value="piscina"/>
                    <label htmlFor="piscina"><span>Piscina</span></label>
                </div>
            </div>

            <div id="mascotas">

                <span>¿Permite mascotas?</span>
                <input type="radio" id="si" name="mascotas" value="si"/>
                <label htmlFor="si"><span>SÍ</span></label>
                <input type="radio" id="no" name="mascotas" value="no"/>
                                <label htmlFor="no"><span>NO</span></label>
                                <input type="hidden" id="disponibilidad" name="disponibilidad" value={alojamiento.available}/>
            </div>

            <input type="submit" value="Confirmar cambios"/>
        </form>
        
    )
}