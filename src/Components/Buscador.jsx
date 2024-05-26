import { useEffect, useState } from "react"
import "./../css/buscador.css"
import { useLocation, useParams } from "react-router-dom"
import { constComunes } from "../Controllers/constantesComunes"
import { useNavigate } from "react-router-dom"

export function Buscador(){
    const [nomAlojamiento, setNomAlojamiento] = useState("")
    const [disponibilidad, setDisponibilidad] = useState("todos")
    const {search} = useLocation()
    const navigate = useNavigate()
    const handleSubmit = ()=>{
        navigate("/search")
    }
    

    useEffect(() =>{
        console.log(window.location)
        let paramsQuery = new URLSearchParams(search)
        let nomQuery = paramsQuery.get("lugar-alojamiento")
        let disponibilidadQuery = paramsQuery.get("disponibilidad")
        setDisponibilidad(disponibilidadQuery)
        setNomAlojamiento(nomQuery)
        

    }, [search])
    
    return(
        
        <form method="get" onSubmit={handleSubmit}>
            <div className="container-estancias">
                <div className="buscador">
                        <div className="item-busqueda">
                                <span><svg>
                                    <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path>
                                </svg></span>
                            <input type="text" name="lugar-alojamiento"  placeholder="¿Adónde vas?" value={nomAlojamiento} onChange={(e)=> setNomAlojamiento(e.currentTarget.value)} required/>
                        </div>

                        <div className="item-busqueda">
                            <input type="date" name="check-in" id="" placeholder="check-in"/>
                            <input type="date" name="check-out" id="" placeholder="Check-out"/>
                        </div>

                        <div className="item-busqueda">
                            <span id="icono-persona"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path>
                            </svg></span>
                            <input type="number" name="adultos" id="" placeholder="Adultos" min="1"/>
                            <input type="number" name="menores" id="" placeholder="Menores" />
                            <input type="number" name="habitaciones" id="" placeholder="Habitaciones"/>
                        </div>

                        <div className="item-boton-buscar">
                            <button className="boton-buscar" type="submit">Buscar</button>
                        </div>
                </div>

                <section className="filtros">
                    <input type="radio" id="todos" value="todos" name="disponibilidad" onChange={(e)=>{setDisponibilidad(e.target.value)}} checked={disponibilidad === 'todos'}  required/>
                    <label htmlFor="disp_todos">Todos</label>
            
                
                    <input type="radio" id="con_disp" value="con_disp" name="disponibilidad" onChange={(e)=>{setDisponibilidad(e.target.value)}} checked={disponibilidad === 'con_disp'}required/>
                    <label htmlFor="hoteles">Disponibles</label>
                
            
                    <input type="radio" id="no_disp" value="no_disp" name="disponibilidad" onChange={(e)=>{setDisponibilidad(e.target.value)}} checked={disponibilidad === 'no_disp'}required/>
                    <label htmlFor="no_disp">Sin disponibilidad</label>
                    
                    <input type="checkbox" id="asc_valoracion" value="asc_valoracion" name="valoracion" /*<c:if test="${valoracion == 'asc_valoracion'}">checked</c:if>*//>
                    <label htmlFor="no_disp">Ordenar por valoración</label>
                </section>
            </div>
        </form>
        
    )
}