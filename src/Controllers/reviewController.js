import axios from 'axios';
import { constComunes } from './constantesComunes';

const API_URL = constComunes.URLAPI
const path = "reviews"
const reviewService = {
      getAllReviewsByUser: async (idu)=>{
            const response = await axios.get(`${API_URL}${path}/user/${idu}`);
            return response.data;
      },
      getAllREviewsByIdp: async (idp) =>{
            const response = await axios.get(`${API_URL}${path}/property/${idp}`)
            return response.data;
      }
      ,
      getReviewById: async (idp,idu)=>{
            const response = await axios.get(`${API_URL}${path}/${idp}/user/${idu}`);
            return response.data;
      },
      createReview: async (review, idu)=>{
            const response = await axios.post(`${API_URL}${path}/user/${idu}`, review);
            return response;
      },
      updateReview: async (review, idu)=>{
            const response = await axios.put(`${API_URL}${path}/user/${idu}`, review);
            return response;
      },
      deleteReview: async (idr)=>{
            const response = await axios.delete(`${API_URL}${path}/${idr}`);
            return response;
      }
}
export default reviewService