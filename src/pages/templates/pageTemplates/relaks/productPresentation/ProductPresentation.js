import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {product} from './DataProductPresentation.js'
import './ProductPresentation.css'



function ProductPresentation() {

 const[isOpen,setIsOpen]=useState(false);
 const[currentNumber, setCurrentNumber]=useState(0)


  return (
    <div className='mainProductPresentationRELAKS'>
      <h1>Magna diam justo et.</h1>
      <p>Gubergren et ut ipsum et dolor sed ipsum amet. Amet clita takimata kasd vero dolor lorem, eos sadipscing dolor ipsum no duo, sed amet duo vero sadipscing sanctus amet sed sit, erat clita ea nonumy eirmod sanctus tempor justo, sea.</p>

<div className='placeForAllProductRELAKS' id='product'>   
  {product.map((item,index)=>{return(
    <div className='productPresentationRELAKS' key={index}>
      <motion.div 
        transition={{layout:{duration:1, type:'spring'}}}
        layout onClick={()=>{setIsOpen(!isOpen); setCurrentNumber(item.id)}}
        className='cardRELAKS'
        style={{borderRadius:'10px', boxShadow:'0px 10px 30px rgba(0,0,0, 0.5) '}}>
 
        <motion.h2 layout='position' >{item.title}</motion.h2>
        <motion.img src={item.img} alt='cos' className='motionImgRELAKS' layout='position'></motion.img>
        {isOpen&&(currentNumber===item.id)&&(
        <motion.div 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{duration:1}} 
          exit={{opacity:0}} 
          className='espandRELAKS'
          >
            <p>{item.text}</p>
        </motion.div>)}
      </motion.div>
    </div> )
    })}

    
   </div>
    </div>
  )
}

export default ProductPresentation