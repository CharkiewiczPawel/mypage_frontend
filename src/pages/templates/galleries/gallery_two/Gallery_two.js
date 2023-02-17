import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Gallery_two.css"
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";
import {dataPicture} from '../DataGalleries.js'

function Gallery_two() {

    const [imageIndex, setImageIndex]=useState(0)
    const [model, setModel]=useState(false)
    const [tempimg,SetTempimg]=useState('')
    const [numerId, setNumerId]=useState(0)
    const [switchPrevious, setSwitchPrevious]=useState(true)

    const NextArrow=({onClick})=>{
        return(
         <div className='arrowG2 nextG2' onClick={onClick}>
            <FaArrowRight/>
         </div>
        )
      }
    const PrevArrow=({onClick})=>{
            return(
              <div className='arrowG2 prevG2' onClick={onClick}>
                 <FaArrowLeft/>
              </div>
             )
      }

    const settings={
        inifinite:true,
        lazyLoad:true,
        speed:300,
        slidesToShow:3,
        centerMode:true,
        centerPadding:0,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        beforeChange:(current, next)=>setImageIndex(next),
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
  
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
       
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      } 
    const getImg=(img, index)=>{
      SetTempimg(img)
      setNumerId(index)
      setModel(true)
      if(index===0){setSwitchPrevious(false)}
      if(index!==0){setSwitchPrevious(true)}
      }
    const nextPicture=()=>{        
        for(let i=0; i<dataPicture.length;i++){
         if(i===numerId){
           console.log(dataPicture[i+1])
           SetTempimg(dataPicture[i+1].img)
           setNumerId(i+1)
           setSwitchPrevious(true)
         }if(numerId+1===dataPicture.length){
           console.log('koniec')
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
    



  return (
    <div className='allGalleryG2'>
        <div className={model?"modelG2 openG2":"modelG2"}>
            <button className="closeButton" onClick={(data)=>{setModel(false)}}>X</button>
            <button className={switchPrevious?"previousSwitchG2":"previousSwitchOffG2"} onClick={()=>previousPicture()} ><BsChevronLeft className="buttonGalleryG2 buttonLeftForBigScreenG2"/></button>
            <img src={tempimg} alt=""/>
            <div className="openModelButtonG2">
            <button className= {switchPrevious?"previousSwitchG2 ForSmallScreenG2":"previousSwitchOffG2 ForSmallScreenG2"}  onClick={()=>previousPicture()} ><BsChevronLeft className="buttonGalleryG2 ForSmallScreenG2"/></button>
            <button className="previousSwitchG2" onClick={()=>nextPicture()}><BsChevronRight className="buttonGalleryG2"/></button>
            </div>
        </div>

        <h1>Galeria 2</h1>

        <div className='maingalleryG2'>

          <div className={!model?'gallerySlickG2':'noGallerySlickG2'}>
            <Slider {...settings}> 
                {dataPicture.map((item,idx)=>
                 <div key={idx} className={idx===imageIndex?"slideG2 ActiveSlideG2":"slideG2"} onClick={()=>{getImg(item.img, idx)}} >
                    <img src={item.img} alt={item.text}/>
                 </div>
                )}
            </Slider>
           </div> 

            <div className='bottomGalleryG2'>
              {dataPicture.map((item,idx)=>
                <div className='picsG2' key={idx} onClick={()=>{getImg(item.img, idx)}}>
                   <img src={item.img} alt={item.text}
                     style={{width:'99%'}}
                    />
                </div>
                )}
            </div>
          
        </div>        
    </div>
  )
}

export default Gallery_two