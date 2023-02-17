import React from 'react'
import CustomerQuestions from './CustomerQuestions'
import './AppWork.css'
import { useSelector } from 'react-redux'
import MainPanel from '../myprivate/mainPanel/MainPanel'


function AppWork() {
  
  const {user}=useSelector(state=>state.userReducer)
  return (
    <div className='appWork'>
      <CustomerQuestions/> 
      {user?.isAdmin?<MainPanel/>:null}
    </div>
  )
}

export default AppWork