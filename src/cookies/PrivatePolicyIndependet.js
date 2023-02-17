import React from 'react'
import PrivacyPolicy from './PrivacyPolicy'
import { useNavigate } from 'react-router-dom'
import './PrivatePolucy.css'

function PrivatePolicyIndependet() {

  const AgreeCookies=localStorage.getItem('isAgree')
  const navigate=useNavigate()
  const Agree=()=>{
    if(!AgreeCookies){ localStorage.setItem('isAgree','yes')}
    navigate('/') 
 }
 const disAgree=()=>{
  if(AgreeCookies){
    localStorage.removeItem('isAgree')
    navigate('/') 
  }else{
    navigate('/') 
  }
}


  return (
    <div className='privatePolicyIndependet'>
      <div className='private_container'>
          <PrivacyPolicy 
           currentheight='50vh'
          />
      
      <div className='buttonPrivetPolicyIntependet'>
        <button className='greenBtn' onClick={()=>{Agree()}}>Akceptuje</button>
        <button className='redBtn' onClick={()=>{disAgree()}}>Nie akceptuje</button>
      </div>
      </div>
    </div>
  )
}

export default PrivatePolicyIndependet