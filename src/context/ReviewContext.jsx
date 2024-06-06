import { createContext, useState } from "react";
import reviewService from "../Controllers/reviewController";

const ReviewContext = createContext({})
export function ReviewContextProvider({children}){
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    return <ReviewContext.Provider value={{reviews, setReviews}}>
        {children}
    </ReviewContext.Provider>

}
export default ReviewContext;