import React,{useEffect, useState} from 'react'
import { useTypewriter} from 'react-simple-typewriter'

import './FirstText.css'

export default function FirstText() {
    const [titleOne,setTitleOne]=useState('')
    const [titleTwo,setTitleTwo]=useState('')

    useEffect(()=>{
       setTitleOne('Cześć! Jestem')
       setTitleTwo('Paweł Charkiewicz')
    },[])
   

    const [text]=useTypewriter({
      
        words:['React.js','Express.js', 'JavaScript'],
        loop:1,
        typeSpeed:90,
        deleteSpeed:150,
        delaySpeed:40,

    })

  return (
    <div className='firstText'>
        <h2>{titleOne}</h2>
        <h1>{titleTwo}</h1>
        <p>programista <strong>{text}</strong></p>
    </div>
  )
}
