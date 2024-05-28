import { useEffect, useState } from "react"
import reviewService from "../../Controllers/reviewController"
import UserContext from "../../context/UserContext"
import { useContext } from "react"
export function ReviewForm({alojamiento}){
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    const [review, setReview] = useState({})
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const [errors, setErrors] = useState()
    const [loading, setLoading] = useState(true)
    const handleReview= (event)=>{
        
        setLoading(true)
        let newReview ={
            "idp": alojamiento.id,
            "idu": user.id,
            "review": `${comment}`, 
            "grade": rating
        }
        setReview(newReview)
        console.log(newReview)

        reviewService.getReviewById(alojamiento.id,user.id).then((response)=>{
            if(response != ""){
                reviewService.updateReview(newReview, user.id).catch((err) => setErrors(err))
                
            }
            else{
                reviewService.createReview(newReview, user.id).catch((err) => setErrors(err))
            }
            
        })
        .catch((err) => setErrors(err))
        .finally(()=>{
            setLoading(false) 
            
            })
        
    }

    useEffect(()=>{
        reviewService.getReviewById(alojamiento.id,user.id).then((response)=>{
            if(response != ""){
                setReview(response)
                setRating(response.grade)
                setComment(response.review)
            }
            
        }).finally(()=>{
            setLoading(false) 
            
            })
    },[])

    return(
        <>
        {loading? null : 
            <>
                <h2>Review Form</h2>
                <form onSubmit={handleReview} >
                
                <div>
                    <label htmlFor="num_valoracion">Rating:</label>
                    <input type="range" name="num_valoracion" 
                        onChange={(e)=>setRating(e.target.value)} 
                        value={rating}
                        min="1" max="5">
                    </input>
                    <span>{rating}</span>
                </div>
                <div>
                    <label htmlFor="descripcion">Comment:</label>
                    <textarea name="descripcion" id="descripcion"
                    onChange={(e)=>{setComment(e.target.value); }}
                    cols="30" rows="10"
                    placeholder="Añade tu valoracion que creas convenientes sobre el alojamiento" 
                    value={comment}
                    required>
                    
                    </textarea>
                </div>
                <button type="submit" className="boton-bg-azul">Enviar review</button>
            </form>
            </>
        }
            
        </>
    )
}