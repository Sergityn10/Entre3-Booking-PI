import axios from 'axios';

//CAMBIAR PARA DESACTIVAR SSL
//const API_URL = "https://localhost:8443/Booking_entrega2/rest/"
const API_URL = "http://localhost:8080/Booking_entrega2/rest/"

const reviewService = {
      getAllReviews: async ()=>{
            const response = await axios.get(`${API_URL}reviews`);
            return response.data;
      },
      getReviewById: async (idr)=>{
            const response = await axios.get(`${API_URL}reviews/${idr}`);
            return response.data;
      },
      createReview: async (review)=>{
            const response = await axios.post(`${API_URL}reviews`, review);
            return response;
      },
      updateReview: async (review)=>{
            const response = await axios.put(`${API_URL}reviews`, review);
            return response;
      },
      deleteReview: async (idr)=>{
            const response = await axios.delete(`${API_URL}reviews/${idr}`);
            return response;
      }
}
export default reviewService