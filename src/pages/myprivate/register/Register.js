import React, { useState } from 'react'
import { RegisterUser } from '../../../forBackend/apicalls/users'
import { toast } from 'react-hot-toast'
import {HideLoader, ShowLoader} from '../../../redux/loaderSlice'
import { useDispatch } from 'react-redux'
import './Register.css'

function Register() {
  const dispatch=useDispatch()
    const[user,setUset]=useState({
        login:'',
        firstName:'',
        lastName:'',
        password:'',
        isAdmin:false,
        isGuest:false,  
        isWorker:false,
        email:'',
      })
    const[open,setOpen]=useState(false) 
 

      const handleChange=({currentTarget: input})=>{
        setUset({ ...user, [input.name]: input.value })
       }
       const handleRegister=async(e)=>{
        e.preventDefault();
        try {
            dispatch(ShowLoader())
            const response=await RegisterUser(user)
            if(response.success){
              dispatch(HideLoader())
              toast.success(response.message)
            }else{
              dispatch(HideLoader())
                toast.error(response.message +'w Else')
                console.log(response.message)
            }
        } catch (error) {
            dispatch(HideLoader())
            toast.error(error.message +'w Catch')
        }
       }
  return (
    <div className='registerAdmin'>
        <h3>Załóż nowe konto</h3>
        <button className='greenBtn' onClick={()=>setOpen(!open)}>{open?"Zwiń":"Rozwiń"}</button>
        {
            open?
            <div className='formRegisterAdmin_container'>
            <form className='formRegisterAdmin' onSubmit={handleRegister}>
                 <input
                   type='text'
                   placeholder='login'
                   name='login'
                   value={user.login}
                   required
                   onChange={handleChange}
                 />
                 <input
                   type='text'
                   placeholder='imię'
                   name='firstName'
                   value={user.firstName}
                   required
                   onChange={handleChange}
                 />
                 <input
                   type='text'
                   placeholder='Nazwisko'
                   name='lastName'
                   value={user.lastName}
                   required
                   onChange={handleChange}
                 />
                 <input
                   type='password'
                   placeholder='hasło'
                   name='password'
                   value={user.password}
                   required
                   onChange={handleChange}
                 />
                 <input
                   type='email'
                   placeholder='email'
                   name='email'
                   value={user.email}
                   required
                   onChange={handleChange}
                 />
                 <label for='isHeAnAdmin'>Czy będzie adminem?</label>
                 <input type='checkbox' id='isHeAnAdmin' name='isAdmin' value={true} onChange={handleChange}/>
                 
                 <label for='isHeGuest'>Czy będzie Gościem?</label>
                 <input type='checkbox' id='isHeGuest' name='isGuest' value={true} onChange={handleChange}/>
                
                 <label for='isHeWorker'>Czy będzie pracownikiem?</label>
                 <input type='checkbox' id='isHeWorker' name='isWorker' value={true} onChange={handleChange}/>
                 
                 <button type='submit' className='greenBtn' >zarejestruj</button>
            </form>
            </div>
            :null
        }
    </div>
  )
}

export default Register