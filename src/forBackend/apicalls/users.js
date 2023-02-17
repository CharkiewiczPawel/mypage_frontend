import { axiosInstance } from "."


export const LoginUser=async(user)=>{
    try{
       const response=await axiosInstance.post('api/charkiewicz_code/users/login',user)
       return response.data
    }catch(error){
     return error.response.data
    }
}

export const RegisterUser=async(user)=>{
    try {
        const response=await axiosInstance.post('api/charkiewicz_code/users/register',user)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const GetCurrentUser=async()=>{
    try{
      const response=await axiosInstance.get('api/charkiewicz_code/users/get_current_user');
      return response.data;
    }catch(error){
      return error.response.data
    }
  }