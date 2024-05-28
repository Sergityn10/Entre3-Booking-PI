import UserContext from "../../context/UserContext"
import { useContext, useEffect, useState } from "react"
import favoritesService from "../../Controllers/favoritesService"
import propertyService from "../../Controllers/propertyService"
import { UserFavorite } from "../../Components/User/UserFavorite"
import { FavoritesContext } from "../../App"
export function MisFavoritos(){
    const {user} = useContext(UserContext)
    const {listFavorites,setListFavorites} = useContext(FavoritesContext)
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        favoritesService.getAllFavoritesByUser(user.id).then((response) => {
        let props = []
            
            response.map((prop) => propertyService.getProperty(prop.idp).then((res) => props.push(res.data)))
            setFavorites(props)
            
        })
    },[])
    return (
        <>
            <main>
            <div className="container-config">
                <section id="reservas"> 
                    <h2>Tus alojmientos guardados</h2>
                </section>
                {favorites.map((prop,index)=> <UserFavorite key={index} alojamiento={prop}/>)}

            </div>
                
            </main>
        </>
    )
}