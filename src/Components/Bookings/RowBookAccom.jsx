import { useContext, useState } from "react"
import ShoppingCartContext from "../../context/ShoppingCartContext"
import bookingService from "../../Controllers/bookinService"


export function RowBookAccom({accom}){
    const [numBooks, setNumBooks] = useState(0)
    const {books, setBooks} = useContext(ShoppingCartContext)
    const handleBookCart = ()=>{
        let book = {
            idb:null,
            idacc:accom.id,
            numAccommodations:numBooks
        }
        
        setBooks([...books, book])
        
    }

    return(
        <>
            <tr>
                        <td className="nombre-hab">{accom.name}</td>
                        <td><span><svg viewBox="0 0 128 128" width="1em" height="1em">
                            <path d="M104 120H24a8 8 0 0 1-8-8V93.5a4 4 0 0 1 1-2.7C21.3 86.4 36.9 72 64 72s42.8 14.4 47 18.8a4 4 0 0 1 1 2.7V112a8 8 0 0 1-8 8zM64 8a28 28 0 1 0 28 28A28 28 0 0 0 64 8z"></path>
                            </svg></span></td>
                        <td>{accom.description}</td>
                        <td>{accom.price}</td>
                        <td>
                            <input type="number" name="num-habitaciones-reserva" id="num-habitaciones-reserva" min="0" onInput={(e)=>setNumBooks(e.target.value)} max={accom.numAccommodations}/>
                            <button className="boton-hab" onClick={handleBookCart}>Añadir al carrito</button>
                        </td>
            </tr>
        </>
    )
}