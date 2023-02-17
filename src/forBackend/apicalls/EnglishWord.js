import axios from "axios";

export const SendEnglishWord=async(word)=>{
    try {
        const response=await axios.post('api/charkiewicz_code/english_word/new_word',word)
        return response.data
    } catch (error) {
        throw error
    }
}

export const GetEnglishWord=async()=>{
    try {
        const response=await axios.get('api/charkiewicz_code/english_word/get_word')
        return response.data
    } catch (error) {
        throw error
    }
}