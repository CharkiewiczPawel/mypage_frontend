import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import './Cookies.css'
import PrivacyPolicy from './PrivacyPolicy'

function Cookies() {
    const [isOpen, setIsOpen]=useState(false)
    const [openClose, setOpenClose]=useState("Otwórz")
    const[openCookies, seIsOpenCookies]=useState(false)

    const AgreeCookies=localStorage.getItem('isAgree')

    useEffect(()=>{
      if(isOpen===false){
        setOpenClose('Otwórz')
      }else{
        setOpenClose('Zamknij')
      }
    },[isOpen])

     const Agree=()=>{
        localStorage.setItem('isAgree','yes')
        seIsOpenCookies(true)
     }
     const disAgree=()=>{
        if(AgreeCookies){
          localStorage.removeItem('isAgree')
          seIsOpenCookies(true)
        }else{
          seIsOpenCookies(true)
        }
     }

if(openCookies===false){
  return (
    <div className='cookies'>
        <motion.div className='cookies_container'
          layout='position'
        >
           <h1>Na tej stronie używamy plików cookies</h1>   
           <div className='first_p_cookies'>
             <p>Wykorzystujemy pliki cookies niezbędne do popranego działania wszystkich elementów strony</p>
             <p>W każdej chwili możesz anulować swoją zgodę na wykorzystywanie plików cookies</p>
           </div>
           <div className='cookiec_btn_container'>
             <button className='greenBtn' onClick={()=>{Agree()}}>Akceptuje</button>
             <button className='redBtn' onClick={()=>{disAgree()}}>Nie akceptuje</button>
           </div>
           <motion.div
                transition={{layout:{duration:1, type:'spring'}}}
                animate={{opacity:2, scale:1}}
                layout onClick={()=>setIsOpen(!isOpen)}
            >
            <motion.p layout='position' className={isOpen?'p_privaty_policy_true':'p_privaty_policy'}>Polityka prywatności - {openClose}</motion.p>
            <motion.div
                initial={{opacity:0}} 
                animate={{opacity:2}} 
                transition={{duration:1}} 
                exit={{opacity:0}} 
            >
                {isOpen&&<PrivacyPolicy currentheight='30vh'/>}
                
            </motion.div>
            </motion.div>
        </motion.div>

        
    </div>
  )
}
}
export default Cookies