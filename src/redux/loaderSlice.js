import{createSlice} from '@reduxjs/toolkit'


//prubujemy przechwycić kiedy pokazać loading a kiedy chcemy ją ukryć
//dzieki temu mamy dostęp do tych funkcji w całym kliencie
const loaderSlice=createSlice({
    name:'loader',
    initialState:{
        loader:false,
    },
    reducers:{
        ShowLoader:(state)=>{
            state.loader=true;
        },
        HideLoader:(state)=>{
            state.loader=false
        }
    }
})

export const{ShowLoader, HideLoader}=loaderSlice.actions
export default loaderSlice.reducer