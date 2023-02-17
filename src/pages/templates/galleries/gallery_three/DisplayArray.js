import React, {useState} from 'react'
import {dataPicture} from '../DataGalleries.js'

function DisplayArray({changeArray}) {

    const [model, setModel]=useState(false) 
    const [tempimg,SetTempimg]=useState('') 
  
    const getImg=(img,id)=>{
      setModel(true)
      SetTempimg(img)
    }

 if(changeArray==='all'){
    return(
      <div>
        <div className={model?"modelGalleryThreeGIII openGalleryThreeGIII":"modelGalleryThreeGIII"}>
           <button className="closeButton" onClick={()=>{setModel(false)}}>X</button>
           <img src={tempimg} alt=''/>
        </div>
        <div>
            {dataPicture.map((item,index)=>{
                return(
                    <div className='picsGalleryThreeGIII' key={index} onClick={()=>{getImg(item.img)}}>
                        <img src={item.img} alt={item.text} style={{width:'100%'}}/>
                    </div>
                )
            })}
        </div>
       </div>
    )  
  }else if(changeArray==='changeOne'){
    return(
        <div>
          <div className={model?"modelGalleryThreeGIII openGalleryThreeGIII":"modelGalleryThreeGIII"}>
             <button className="closeButton" onClick={()=>{setModel(false)}}>X</button>
             <img src={tempimg} alt=''/>
          </div>
          <div>
            {
                dataPicture.filter(items=>items.id%2!==0).map(item=>(
                    <div className='picsGalleryThreeGIII' onClick={()=>{getImg(item.img)}} key={item.id} >
                       <img src={item.img} alt={item.text} style={{width:'100%'}}/>
                    </div>
                ))
            }
          </div>
        </div>
    )
  }else if(changeArray==='changeTwo'){
    return(
        <div>
        <div className={model?"modelGalleryThreeGIII openGalleryThreeGIII":"modelGalleryThreeGIII"}>
             <button className="closeButton" onClick={()=>{setModel(false)}}>X</button>
             <img src={tempimg} alt=''/> 
        </div>
        <div>
            {
                dataPicture.filter(items=>items.id%2===0).map(item=>(
                    <div className='picsGalleryThreeGIII' onClick={()=>{getImg(item.img)}} key={item.id}>
                       <img src={item.img} alt={item.text} style={{width:'100%'}}/>
                    </div>
                ))
            }
        </div>
      </div>
    )
  }

}

export default DisplayArray