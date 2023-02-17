import React from 'react'
import BubbleSkills from './BubbleSkills'
import './BubbleSkills.css'
import { TiArrowUpOutline } from "react-icons/ti";

export default function BoardBubbleSkills({open, onClose}) {
    if(!open)return null
  return (
    <div className="boardBubble">
    <div >
      <button onClick={onClose} className='buttonForBubble'>
        Zwiń
        <TiArrowUpOutline/>
        </button>
    </div>           
        <BubbleSkills/> 
  </div>
  )
}
