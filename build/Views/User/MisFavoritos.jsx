import UserContext from "../../context/UserContext"
import { useContext, useEffect, useState } from "react"
import favoritesService from "../../Controllers/favoritesService"
import propertyService from "../../Controllers/propertyService"
import { UserFavorite } from "../../Components/User/UserFavorite"
import { FavoritesContext } from "../../App"
import Loading from "../../Components/Loading"
export function MisFavoritos(){
    const {user} = useContext(UserContext)
    const {listFavorites,setListFavorites} = useContext(FavoritesContext)
    const [favorites, setFavorites] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        favoritesService.getAllFavoritesByUser(user.id).then((response) => {
        
            
            
            setFavorites(response)
            
           
        })
        setLoading(false)
        
        
    },[])
    return (
        <>
        <main>
            <div className="container-config">
                <section id="reservas"> 
                    <h2>Tus alojmientos guardados</h2>
                </section>
        {loading ? <Loading/> :
        
              <>{favorites.map((prop,index)=> <UserFavorite key={index} favorito={prop}/>)}</>  

            
        }
            </div>
                
            </main>
        </>
    )
}