import React, { useState } from 'react'
import DrawDraw from './DrawDraw'

function ChangeDrawn({firstImage,secondImage,firstOpinion,secondOpinion}) {

    const [selectOptions, setSelectOptions]=useState(1)

  return (
    <div>
         <DrawDraw
           firstImage={firstImage}
           secondImage={secondImage}
           firstOpinion={firstOpinion}
           secondOpinion={secondOpinion}
           selectOptions={selectOptions}
         />
         <div className='selectOptionDO'>
            <button className='greenBtn' onClick={()=>setSelectOptions(1)}>Opcja I</button>
            <button className='greenBtn' onClick={()=>setSelectOptions(2)}>Opcja II</button>
            <button className='greenBtn' onClick={()=>setSelectOptions(3)}>Opcja III</button>
         </div>
    </div>
  )
}

export default ChangeDrawn