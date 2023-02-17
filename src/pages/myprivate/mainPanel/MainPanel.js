import React from 'react'
import { useNavigate } from 'react-router-dom'

function MainPanel() {
    const navigate=useNavigate()
  return (
    <div className='mainPanelPrivate'>
        <button className='greenBtn' onClick={()=>navigate('/admin')}>Administrator</button>
    </div>
  )
}

export default MainPanel