import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GetCurrentUser } from '../apicalls/users'
import { HideLoader, ShowLoader } from '../../redux/loaderSlice'
import {SetUser} from '../../redux/userSlice'

function Protected({children}) {

  const dispatch=useDispatch()
  const {user}=useSelector(state=>state.userReducer)
  const navigate=useNavigate()

  const getCurrentUser=async()=>{
    try {
        dispatch(ShowLoader())
        const response=await GetCurrentUser()//pobiera zalogowanego uzytkonika
        console.log(response.data)    
        dispatch(HideLoader())
        if(response.success &&response.data.isGuest===true){
            dispatch(SetUser(response.data))//wysyłamy do reducera wartości użytkonika zalogowanego  
            localStorage.setItem("isGuest","true")
        }else if(response.success &&response.data.isWorker===true){
            dispatch(SetUser(response.data))
            localStorage.setItem("isWorker","true")
            navigate('/work')
        }else{
            toast.error(response.message+'To jest w else') 
            navigate('/login')
            localStorage.removeItem('token')           
        }
    } catch (error) {
        dispatch(HideLoader())
        toast.error('to jest w catch '+error.message)
        navigate('/login')
    }
  }

 useEffect(()=>{
    if(localStorage.getItem('token')){
           getCurrentUser() 

    }else{
        navigate('/login')
    }
 },[])

return(
    <div style={{marginTop:'70px'}}>
        <h1 style={{marginLeft:'5vw'}}>Witaj {user?.firstName}</h1>
        <div>{children}</div>
    </div>
)


}
export default Protected