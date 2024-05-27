import UserContext from "../../context/UserContext"
import { useContext, useEffect, useState } from "react"
import favoritesService from "../../Controllers/favoritesService"
import { UserFavorite } from "../../Components/User/UserFavorite"
export function MisFavoritos({}){
    const {user} = useContext(UserContext)
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        favoritesService.getAllFavoritesByUser(user.id).then((response) => {
            setFavorites(response)
        })
    }, [favorites])
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