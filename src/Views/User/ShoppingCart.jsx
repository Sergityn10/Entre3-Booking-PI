import { useContext } from "react"
import ShoppingCartContext from "../../context/ShoppingCartContext"
import { CardBookAccoms } from "../../Components/User/CardBookAccoms"
import { useNavigate } from "react-router-dom"
export function ShoppingCart(){
    const {books, setBooks} = useContext(ShoppingCartContext)
    const navigate = useNavigate()
    return(
        <main>

            <h1>Mi carrito</h1>
            {books.map((book, index)=> <CardBookAccoms key={index} index={index} book={book} shopCart={books} setBooks={setBooks}/>)}
            <button className="boton-bg-azul" onClick={()=> navigate("/payment")}>Realizar reserva</button>

        </main>
    )
}