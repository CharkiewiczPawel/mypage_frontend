import React, { useState } from 'react'
import '../PhotoOwner.css'

function Clock() {
  
    let time=new Date().toLocaleTimeString()
    const [ctime,setCtime]=useState(time);

    const UpdateTime=()=>{
        let time=new Date().toLocaleTimeString()  
        setCtime(time)
    }

    setInterval(UpdateTime,1000)

  return (
    <div>
        <h1 className='time'>{ctime}</h1>
    </div>
  )
}

export default Clock