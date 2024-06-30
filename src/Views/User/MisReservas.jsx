import { useSearchParams } from "react-router-dom"
import { ListBookings } from "../../Components/User/ListBookings"
import { useState, useContext, useEffect } from "react"
import UserContext from "../../context/UserContext"
import bookingService from "../../Controllers/bookinService"
import Loading from "../../Components/Loading"
export function MisReservas(){
    const [bookings, setBookings] = useState([])
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    const [loading, setLoading]= useState(true)
    useEffect(()=>{
        bookingService.getBookingsByIdu(user.id).then((response)=>{
            setBookings(response)
        })
        .finally(()=>{
            setLoading(false)
            })
    },[user])

    return(
        <main>
            <h1>Mis Reservas</h1>
        {loading? <Loading/> : <ListBookings listUserBookings={bookings}/>}
        
        </main>
    )
}