import React, {useState, useEffect } from 'react'
import {  useNavigate } from "react-router-dom";
import './Login.css'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import {HideLoader, ShowLoader} from '../../../redux/loaderSlice'
import { LoginUser } from '../../../forBackend/apicalls/users';
import moon from '../../../assets/forProjects/stock/moon.png'


function Login() {

	const[user, setUser]=useState({
		login:'',
		password:''
	  })
	  const dispatch=useDispatch()
	  const navigate=useNavigate()

	  const handleChange=({currentTarget:input})=>{
		setUser({...user,[input.name]:input.value})
	  }
	  const handleLogin=async(e)=>{
		e.preventDefault();
		try{
			dispatch(ShowLoader())
			const response=await LoginUser(user)
			dispatch(HideLoader())
			if(response.success){
				toast.success(response.message)          
				localStorage.setItem('token',response.data)
				window.location.href='/gallery'
			}else{
			  dispatch(HideLoader())
				toast.success(response.message)           
			  }
		}catch(error){
			toast.error(error.message)
		}
	  }
	
	  useEffect(()=>{
		if(localStorage.getItem('token')){navigate('/gallery')}
	   },[])

const AgreeCookies=localStorage.getItem('isAgree')  
if(AgreeCookies){
  return (
    <div className='login'>
      <img src={moon} alt={'Księżyc'}/>
	  <form className='loginForm' onSubmit={handleLogin}>
        <h1>LOGOWANIE</h1>
		<div className='formContainer'>
		<input
		  type='text'
		  placeholder='Login'
		  name='login'
		  value={user.login}
		  required
		  className='inputForLogin'
		  onChange={handleChange}
		/>
		<input
		  type='password'
		  placeholder='Hasło'
		  name='password'
		  value={user.password}
		  required
		  className='inputForLogin'
		  onChange={handleChange}
		/>
		</div>
          <button className='greenBtn' type='submit'  >Zaloguj</button>
	  </form>
	</div>
   
  )}
  if(!AgreeCookies){
	return(
	<div className='login'>
       <h1 className='colorOfDisagree'>Musisz zaakceptować politykę prywatności aby móc korzystać z tego modułu :(</h1>
	</div>)
  }
}

export default Login