import { useNavigate } from "react-router-dom"
import reviewService from "../../Controllers/reviewController"

export function DeleteReviewForm({review}){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    const DeleteReview = async ()=>{
        try{
            reviewService.deleteReview(review.idp,review.idu)
        }finally{
            navigate("/config/reviews")
        }
    }
    return(
        <>
        
            <>
                <form onSubmit={DeleteReview} >
                
                <div>
                    <label htmlFor="num_valoracion">Rating:</label>
                    <input type="range" name="num_valoracion" 
                        
                        value={review.grade}
                        min="1" max="5"
                        readOnly>
                    </input>
                    <span>{review.grade}</span>
                </div>
                <div>
                    <label htmlFor="descripcion">Comment:</label>
                    <textarea name="descripcion" id="descripcion"
                    
                    cols="30" rows="10"
                    placeholder="Añade tu valoracion que creas convenientes sobre el alojamiento" 
                    value={comment}
                    required
                    readOnly>
                    
                    </textarea>
                </div>
                <button type="submit" className="boton-bg-azul">Eliminar review</button>
            </form>
            </>
        
        </>
    )
}