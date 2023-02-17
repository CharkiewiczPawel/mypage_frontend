import { axiosInstance } from "."
import axios from "axios";

export const SendCustomerQuestion=async(message)=>{
    try {
        const response= await axios.post('api/charkiewicz_code/question/new-customer-question',message)
        return response.data
    } catch (error) {
        throw error
    }
}

export const GetCustomerQuestion=async()=>{
    try {
        const response=await axios.get('api/charkiewicz_code/question/get-all-customer-question')
        return response.data
    } catch (error) {
        throw error
    }
}