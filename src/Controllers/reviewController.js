import axios from 'axios';

//CAMBIAR PARA DESACTIVAR SSL
//const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
const API_URL = "http://localhost:8080/Booking_entrega2/rest/"

const reviewService = {
      getAllReviewsByUser: async (idu)=>{
            const response = await axios.get(`${API_URL}reviews/user/${idu}`);
            return response.data;
      },
      getReviewById: async (idp,idu)=>{
            const response = await axios.get(`${API_URL}reviews/${idp}/user/${idu}`);
            return response.data;
      },
      createReview: async (review, idu)=>{
            const response = await axios.post(`${API_URL}reviews/user/${idu}`, review);
            return response;
      },
      updateReview: async (review, idu)=>{
            const response = await axios.put(`${API_URL}reviews/user/${idu}`, review);
            return response;
      },
      deleteReview: async (idr)=>{
            const response = await axios.delete(`${API_URL}reviews/${idr}`);
            return response;
      }
}
export default reviewService