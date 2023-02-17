import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { SendCustomerQuestion } from '../../../forBackend/apicalls/CustomerQuestion'
import { useDispatch } from 'react-redux'
import {HideLoader, ShowLoader} from '../../../redux/loaderSlice'
import './Contact.css'


export default function Contact() {

  const AgreeCookies=localStorage.getItem('isAgree')
  const [displayQuestion, setDisplayQuestion]=useState("Yes")
  const [error,setError]=useState()
  const[customerQuestion, setCustomerQuestion]=useState({
    email:'',
    text:'',
    actionTaken:false,
})

const dispatch=useDispatch()
const navigate=useNavigate()
const handleChange=({currentTarget: input})=>{
    setCustomerQuestion({ ...customerQuestion, [input.name]: input.value })
   }
 
const handleCustomerQuestion=async(e)=>{
    e.preventDefault();
    try {
        dispatch(ShowLoader())
        const response=await SendCustomerQuestion(customerQuestion)
        dispatch(HideLoader())
        if(response.success&&AgreeCookies){
          setDisplayQuestion('No')
        }else if(!AgreeCookies){
          dispatch(HideLoader())
          setError('Musisz zaakceptować politykę prywatności aby móc wysyłać wiadomości')
          setDisplayQuestion("Error")
        }else{
          dispatch(HideLoader())
          setDisplayQuestion("Error")
          setError(error.message)
        }
    } catch (error) {
        dispatch(HideLoader())
        setError(error.message)
        setDisplayQuestion("Error")
    }
}  
const setForUseState=()=>{
  
  setDisplayQuestion("Yes")
  setCustomerQuestion(
    {
      text:""
    })
    console.log(customerQuestion)
}
const ShowPrivatePolicy=()=>{

    navigate('/privatePolicy') 
}

if(displayQuestion==="Yes"){
  return (

    <div className='contact' >
      <h1>Kontakt</h1>
      <div className='elements_contact'>
        <div className='contact_container'>
          <p>Email: <span>charkiewiczpl@gmail.com</span></p>
        </div>
        <div className='customerQuestion'>
           <h3>Masz pytanie? Napisz</h3>
           <form className='questionForm' onSubmit={handleCustomerQuestion}>
           <input
            type='email'
            placeholder='email'
            name='email'
            required     
            value={customerQuestion.email}  
            onChange={handleChange} 
            className='customerEmailInput'    
            />
            <textarea
            rows="15"
            cols='10'
            placeholder='zapytanie'
            name='text'
            value={customerQuestion.text}    
            required
            onChange={handleChange}
            className='customerTextArea'
            /> 
            <button className='greenBtn'>Wyślij</button>
           </form>
        </div> 
      </div>
      <div className='privatePolicyInContact'>
         <p onClick={()=>ShowPrivatePolicy()}>Polityka prywatności</p>
      </div>
    </div>
  )
  }
  if(displayQuestion==="No"){
    return(
      <div className='contact' >
      <h1>Kontakt</h1>
      <div className='elements_contact'>
        <div className='contact_container'>
          <p>Email: <span>charkiewiczpl@gmail.com</span></p>
        </div>
        <div className='customerQuestion'>
            <h2 className='customerQuestionAnswer'>Wiadomość wysłana porawnie</h2>
            <button onClick={()=>setForUseState()} className='greenBtn'>Wyślij nową wiadomość</button>
        </div> 
      </div>
      <div className='privatePolicyInContact'>
         <p onClick={()=>ShowPrivatePolicy()}>Polityka prywatności</p>
      </div>
    </div>
    )
  }

if(displayQuestion==="Error"){
  return(
    <div className='contact' >
    <h1>Kontakt</h1>
    <div className='elements_contact'>
      <div className='contact_container'>
        <p>Email: <span>charkiewiczpl@gmail.com</span></p>
      </div>
      <div className='customerQuestion'>
          <h2 className='customerQuestionError'>{error}</h2>
          <button onClick={()=>setForUseState()} className='greenBtn'>Wyślij nową wiadomość</button>
      </div> 
    </div>
    <div className='privatePolicyInContact'>
         <p onClick={()=>ShowPrivatePolicy()}>Polityka prywatności</p>
      </div>
  </div>
  )
}
}