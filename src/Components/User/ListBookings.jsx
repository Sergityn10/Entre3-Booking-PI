import { useState } from "react"
import React from "react"
import { UserBooking } from "./UserBooking"


export function ListBookings({listUserBookings}){
    return (
        <>
            {listUserBookings.map( (booking, index) => <UserBooking key={booking.id} booking={booking}/>)}
        
        </>

    )
}