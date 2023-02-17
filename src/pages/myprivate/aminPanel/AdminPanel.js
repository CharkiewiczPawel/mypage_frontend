import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Register from '../register/Register'
import './AdminPanel.css'

function AdminPanel() {

    const {user}=useSelector(state=>state.userReducer) 
    const navigate=useNavigate()

    useEffect(()=>{
      if(!localStorage.getItem('token')){navigate('/')}
     },[])
    
     return (
    <div className='adminPanelPrivate'>
        <h1 style={{color:'white'}}>Panel Administratora: {user?.firstName} </h1>
        <Register/>
        <button className='greenBtn' onClick={()=>navigate('/english_admin')}>Angielski</button>
        
    </div>
  ) 
      

    


}

export default AdminPanel