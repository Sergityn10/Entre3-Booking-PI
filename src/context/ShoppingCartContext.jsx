
import { useEffect, useState } from "react";
import { createContext } from "react";
const ShoppingCartContext = createContext({})
export function ShoppingCartContextProvider({children}){
    const [books, setBooks] = useState([]);
    const [totalNumAccoms, setTotalNumAccoms] = useState(0)
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        let numAccoms = books.reduce((total, book)=> total+ parseInt(book.numAccommodations),0)
        setTotalNumAccoms(numAccoms)
    },[books])

    return <ShoppingCartContext.Provider value={{books, setBooks, totalNumAccoms, setTotalNumAccoms}}>
        {children}
    </ShoppingCartContext.Provider>

}
export default ShoppingCartContext;