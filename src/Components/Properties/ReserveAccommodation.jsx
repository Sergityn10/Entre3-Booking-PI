import { RowBookAccom } from "../Bookings/RowBookAccom"
export function ReserveAccommodation({accommodations}){
    
    return (
        <>
             <table className="hotel-table">
                <thead>
                    <tr>
                        <th>Tipo de habitación</th>
                        <th>Número de personas</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Elige el número de habitaciones</th>
                        <th>Reservar</th>
                    </tr>
                </thead>
                <tbody>
                {accommodations.map((accom, index) =>{
                    return (
                    <RowBookAccom accom={accom} key={index}/>
                )})}
                    
                   
                    
                </tbody>
            </table>
        </>
    )
}