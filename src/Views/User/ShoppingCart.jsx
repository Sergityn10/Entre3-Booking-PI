import { useContext } from "react"
import ShoppingCartContext from "../../context/ShoppingCartContext"
import { CardBookAccoms } from "../../Components/User/CardBookAccoms"
export function ShoppingCart(){
    const {books, setBooks} = useContext(ShoppingCartContext)
    return(
        <>
            <h1>Mi carrito</h1>
            {books.map((book, index)=> <CardBookAccoms key={index} book={book}/>)}

        </>
    )
}