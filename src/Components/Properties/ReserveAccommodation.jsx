import { useContext, useState } from "react"
import { RowBookAccom } from "../Bookings/RowBookAccom"
import ShoppingCartContext from "../../context/ShoppingCartContext"
import { useNavigate } from "react-router-dom"
export function ReserveAccommodation({accommodations}){
    const navigate = useNavigate()
    const {totalNumAccoms, setTotalNumAccoms}= useContext(ShoppingCartContext)
    const handleBookCart = async ()=>{
        navigate("/payment")
    }

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
                        <>
                            <tr>
                                <RowBookAccom accom={accom} key={index} index={index} />
                                {index ===0? <td rowSpan={accommodations.length}><button className="boton-hab" onClick={handleBookCart} disabled={totalNumAccoms === 0? true: false}>Reservar</button></td>  : null}
                            </tr>
                        </>
                        
                    

                )})}
                    
                   
                    
                </tbody>
            </table>
        </>
    )
}