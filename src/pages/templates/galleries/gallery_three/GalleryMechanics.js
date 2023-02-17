import React, {useEffect,useState} from 'react'
import DisplayArray from './DisplayArray'

function GalleryMechanicsG3() {

  const [changeArray, setchangeArray]=useState('all')
  const [styleButtonAll, setStyleButtonAll]=useState(true)
  const [styleButtonChangeOne, setStyleButtonChangeOne]=useState(false)
  const [styleButtonChangeTwo, setStyleButtonChangeTwo]=useState(false)

  const buttonOne=()=>{
    setchangeArray('all')
    setStyleButtonAll(true)
    setStyleButtonChangeOne(false)
    setStyleButtonChangeTwo(false)
}
const buttonTwo=()=>{
    setchangeArray('changeOne')
    setStyleButtonAll(false)
    setStyleButtonChangeOne(true)
    setStyleButtonChangeTwo(false)
}
const buttonThree=()=>{
    setchangeArray('changeTwo')
    setStyleButtonAll(false)
    setStyleButtonChangeOne(false)
    setStyleButtonChangeTwo(true)
}


 useEffect(()=>{
 },)

  return (
    <div className='gallery_threeGIII'>
    <div className='butonPlaceGIII'>
     <button onClick={(()=>buttonOne())} className={styleButtonAll?"buttonActiveGIII":"buttonNotActiveGIII"}>Wszystko</button>
     <button onClick={(()=>buttonTwo())} className={styleButtonChangeOne?"buttonActiveGIII":"buttonNotActiveGIII"}>Wybór I</button>
     <button onClick={(()=>buttonThree())} className={styleButtonChangeTwo?"buttonActiveGIII":"buttonNotActiveGIII"}>Wybór II</button>
    </div>
    <div className='galleryGalleryThreeGIII'>
     <DisplayArray changeArray={changeArray}/>

    </div>
      

 </div>
  )
}

export default GalleryMechanicsG3