import { createContext, useEffect, useState } from "react";

import favoritesService from "../Controllers/favoritesService";

const FavoriteContext = createContext({})
export function FavoriteContextProvider({children}){
    const [propsFavorites, setPropsFavorites] = useState([]);
    
    const [loading, setLoading] = useState(false);
    
    return <FavoriteContext.Provider value={{propsFavorites, setPropsFavorites}}>
        {children}
    </FavoriteContext.Provider>

}
export default FavoriteContext;