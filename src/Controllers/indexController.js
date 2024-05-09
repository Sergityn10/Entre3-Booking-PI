import axios from 'axios';
const URL = "https://localhost:8443/Booking_entrega2/rest/"
const userService = {
    login: (user) => {
        return axios.post(URL + "login", user)
    }
}
export default userService