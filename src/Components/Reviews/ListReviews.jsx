import { CardReview } from "./CardReview"

export function ListReviews({listReviews}){

    return (
        <>
            
            {listReviews.map((review, index) => 
            <>
                
                <CardReview review={review} key={index}/>
            </> )}
        </>
    )
}