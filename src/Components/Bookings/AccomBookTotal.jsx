import { useEffect, useState } from "react"
import accommodationService from "../../Controllers/accommodationService"

export function AccomBookTotal({bookAccom}){
    const [accom, setAccom] = useState(null)
    useEffect(()=>{
        accommodationService.getAccommodationByIda(bookAccom.idacc).then((res)=>{
            setAccom(res)
        })
    },[])
    return(
        <>
            {accom? <p>{accom.name}</p>:null}

        </>
    )
}