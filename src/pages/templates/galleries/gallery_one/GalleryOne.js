import React, { useState } from "react"
import {dataPicture} from '../DataGalleries.js'
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";
import './GalleryOne.css'


const Gallery_one=()=>{

    const [model, setModel]=useState(false)
    const [tempimg,SetTempimg]=useState('')
    const [numerId, setNumerId]=useState(0)
    const [switchPrevious, setSwitchPrevious]=useState(true)

    const getImg=(img, index)=>{
        SetTempimg(img)
        setNumerId(index)
        setModel(true)
        console.log(index)
        if(index===0){setSwitchPrevious(false)}
        if(index!==0){setSwitchPrevious(true)}
      }

      const nextPicture=()=>{        
        for(let i=0; i<dataPicture.length;i++){
         if(i===numerId){
           SetTempimg(dataPicture[i+1].img)
           setNumerId(i+1)
           setSwitchPrevious(true)
         }if(numerId+1===dataPicture.length){
           i=0
           SetTempimg(dataPicture[0].img)
           setNumerId(0)
           setSwitchPrevious(false) 
           return
         }
        }
     }
     const previousPicture=()=>{
          for(let i=0; i<dataPicture.length;i++){
           if(i===numerId){
             SetTempimg(dataPicture[i-1].img)
             setNumerId(i-1)
             setSwitchPrevious(true)
           }if(numerId===1){
             setSwitchPrevious(false)
           }
          }
     }   
    
    return(
        <div className="gallery_one">
            <h1>GALERIA I</h1>

            <div className={model?"modelGalleryOne openGalleryOne":"modelGalleryOne"}>
              <button className="closeButton" onClick={(data)=>{setModel(false)}}>X</button>
              <button className={switchPrevious?"previousSwitchGalleryOne":"previousSwitchOffGalleryOne"} onClick={()=>previousPicture()} ><BsChevronLeft className="buttonGalleryGalleryOne buttonLeftForBigScreenGalleryOne"/></button>
              <img src={tempimg} alt=""/>

                <div className="openModelButtonGalleryOne">
                  <button className= {switchPrevious?"previousSwitchGalleryOne ForSmallScreenGalleryOne":"previousSwitchOffGalleryOne "}  onClick={()=>previousPicture()} ><BsChevronLeft className="buttonGalleryGalleryOne ForSmallScreenGalleryOne"/></button>
                  <button className="previousSwitchGalleryOne" onClick={()=>nextPicture()}><BsChevronRight className="buttonGalleryGalleryOne"/></button>
                </div>
            </div>
            
            <div className="galleryGalleryOne">
               {dataPicture.map((item,index)=>{
                  return(
                    <div className="picsGalleryOne" key={index} onClick={()=>{getImg(item.img, index)}} >
                        <img src={item.img} alt={item.text} style={{width:'100%'}}/>
                    </div>
                  )
               })}
            </div>

        </div>
    )
}

export default Gallery_one