import { CardReview } from "./CardReview"

export function ListReviews({listReviews}){
    
    return (
        <>
            
            {listReviews.map((review) => 
            
                
                <CardReview review={review} key={review.idp}/>
             )}
        </>
    )
}