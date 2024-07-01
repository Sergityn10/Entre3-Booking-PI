import reviewService from "../../Controllers/reviewController"
import { ReviewForm } from "../../Components/Forms/ReviewForm"
export function DeleteReview (){
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    
    return(
        <main>
            <h1>¿De verdad quieres eliminar esta review?</h1>

        </main>
    )
}