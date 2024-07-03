import { useEffect, useState } from "react"
import propertyService from "../Controllers/propertyService"
import accommodationService from "../Controllers/accommodationService"

export function HabitacionesDisponibles(){
    const [loading, setLoading] = useState(true)
    const [habitaciones, setHabitaciones] = useState(0)

    const [disponibilidad, setDisponibilidad] = useState(0)
    useEffect(()=>{
        setLoading(true)
        var contador = 0
        propertyService.getAllByDisponibilidad(disponibilidad).then((response) =>{
            console.log(response)
            response.map((alojamiento) =>{
                accommodationService.getAccommodationsByIdp(alojamiento.id).then((resp)=>{
                    contador += resp.length
                    
                    setHabitaciones(contador)
                })
            })
        })
        //setHabitaciones(contador)
        setLoading(false)
    },[disponibilidad])
    return (
        <main>
            {loading? null: <>
            <label  htmlFor="dips">Sin disponibilidad</label>
            <input type="radio" name="disp" id="sin-disp" value="0" onInput={(e)=> setDisponibilidad(parseInt(e.target.value))}  />

            <label  htmlFor="dips">Con disponibilidad</label>
            <input type="radio" name="disp" id="con-disp" value="1" onInput={(e)=> setDisponibilidad(parseInt(e.target.value))}/>
            
            <h1>Habitaciones disponibles: {habitaciones>3? <span className="yellow-letters">{habitaciones}</span> : habitaciones}</h1>

            </>
            }
        </main>
    )
}