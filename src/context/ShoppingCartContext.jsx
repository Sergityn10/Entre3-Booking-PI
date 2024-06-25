
import { useEffect, useState } from "react";
import { createContext } from "react";
const ShoppingCartContext = createContext({})
export function ShoppingCartContextProvider({children}){
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const storedBooks = localStorage.getItem('ShoppingCart');
        if(storedBooks){
            setBooks(JSON.parse(storedBooks));
            }
    },[])

    return <ShoppingCartContext.Provider value={{books, setBooks}}>
        {children}
    </ShoppingCartContext.Provider>

}
export default ShoppingCartContext;