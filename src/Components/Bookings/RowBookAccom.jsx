import { useContext, useState } from "react"
import ShoppingCartContext from "../../context/ShoppingCartContext"
import bookingService from "../../Controllers/bookinService"
import { json } from "react-router-dom"


export function RowBookAccom({accom, index}){
    const [numBooks, setNumBooks] = useState(0)
    const {books, setBooks} = useContext(ShoppingCartContext)
    // const handleBookCart = ()=>{
        // let book = {
        //     idb:null,
        //     idacc:accom.id,
        //     numAccommodations:numBooks
        // }
    //     let newBooks = [...books, book]
    //     setBooks(newBooks)
        
    //     localStorage.setItem("ShoppingCart", JSON.stringify(newBooks))
    // }
    const handleChangeNumAccoms = async (e)=>{
        setNumBooks(e.target.value)
        let book = {
            idb:0,
            idacc:accom.id,
            numAccommodations:e.target.value
        }
        let copyBooks = [...books]
        copyBooks.splice(index,1,book) 
        setBooks(copyBooks)
        
    }

    return(
        <>
            
                        <td className="nombre-hab">{accom.name}</td>
                        <td><span><svg viewBox="0 0 128 128" width="1em" height="1em">
                            <path d="M104 120H24a8 8 0 0 1-8-8V93.5a4 4 0 0 1 1-2.7C21.3 86.4 36.9 72 64 72s42.8 14.4 47 18.8a4 4 0 0 1 1 2.7V112a8 8 0 0 1-8 8zM64 8a28 28 0 1 0 28 28A28 28 0 0 0 64 8z"></path>
                            </svg></span></td>
                        <td>{accom.description}</td>
                        <td>{accom.price}</td>
                        <td>
                            <input type="number" name="num-habitaciones-reserva" id="num-habitaciones-reserva" min="0" onInput={handleChangeNumAccoms} max={accom.numAccommodations}/>
                            
                        </td>
            
        </>
    )
}