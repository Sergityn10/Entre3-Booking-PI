import UserContext from "../../context/UserContext"
import { useContext, useEffect, useState } from "react"
import favoritesService from "../../Controllers/favoritesService"
import propertyService from "../../Controllers/propertyService"
import { UserFavorite } from "../../Components/User/UserFavorite"
import FavoriteContext from "../../context/FavoriteContext"
import Loading from "../../Components/Loading"
export function MisFavoritos(){
    const {user} = useContext(UserContext)
    const {propsFavorites,setPropsFavorites} = useContext(FavoriteContext)
    const [favorites, setFavorites] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        favoritesService.getAllFavoritesByUser(user.id).then((response) => {
        
            
            
            setPropsFavorites(response)
            
           
        })
        setLoading(false)
        
        
    },[])
    return (
        <>
        <main>
            <div className="container-config">
                <section id="reservas"> 
                    <h2>Tus alojamientos guardados</h2>
                </section>
        {loading ? <Loading/> :
        
              <>{propsFavorites.map((prop,index)=> <UserFavorite key={prop.idp} index={index} favorito={prop}/>)}</>  

            
        }
            </div>
                
            </main>
        </>
    )
}