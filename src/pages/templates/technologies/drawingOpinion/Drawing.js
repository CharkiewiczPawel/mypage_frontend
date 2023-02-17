import React, { useEffect, useState } from 'react'
import {dataForOpinions} from '../../../../Data/TemplateData.js'
import ChangeDrawn from './ChangeDrawn.js'

function Drawing() {

  const [firstImage, setFirsImage]=useState()
  const [secondImage, setSecondImage]=useState()

  const [firstOpinion, setFirstOpinion]=useState()
  const [secondOpinion, setSecondOpinion]=useState()

  const [isChange, setIsChange]=useState(false)

  const draw=()=>{
    const drawing=()=>{
    const drawfirstImage=Math.floor(Math.random()*dataForOpinions.length)
    const drawSecondImage=Math.floor(Math.random()*dataForOpinions.length)
    const drawFirstOpinion=Math.floor(Math.random()*dataForOpinions.length)
    const drawSecondOpinion=Math.floor(Math.random()*dataForOpinions.length)
   
    if (drawfirstImage===drawSecondImage){return drawing()}
    else if (drawFirstOpinion===drawSecondOpinion){return drawing()}
    else{
        setFirsImage(drawfirstImage)
        setSecondImage(drawSecondImage)
        setFirstOpinion(drawFirstOpinion)
        setSecondOpinion(drawSecondOpinion)
    }
   }
    drawing()
     
  }
   useEffect(()=>{
    draw()},[])
    useEffect(()=>{
        draw()},[isChange])

  return (
    <div className='drawingDO'>
      
      <ChangeDrawn
        firstImage={firstImage}
        secondImage={secondImage}
        firstOpinion={firstOpinion}
        secondOpinion={secondOpinion}
      />
      <div className='divForButtonDrawingDO'>
        <button onClick={()=>setIsChange(!isChange)} className='greenBtn'>Generuj</button>
      </div>

    </div>
  )
}

export default Drawing