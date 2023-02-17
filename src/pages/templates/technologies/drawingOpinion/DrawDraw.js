
import React from 'react'
import {dataForOpinions} from '../../../../Data/TemplateData.js'

function DrawDraw({firstImage,secondImage,firstOpinion,secondOpinion,selectOptions }) {
  if(selectOptions===1){
    return(
        <div className='firstChangeDO'>
            <div className='allFirstOpinionsDO'>
              <div className='imagefirstOpinionsDO'>
                {
                    dataForOpinions.filter(item=>item.id===firstImage+1).map(image=>(
                        <img src={image.img} key={image.id} alt={image.alt}/>
                    ))
                }
              </div>
              <div className='opinionFirstOpinionsDO'>
                {
                    dataForOpinions.filter(item=>item.id===firstOpinion+1).map(opinion=>(
                        <p key={opinion.id+0.5}>{opinion.opinion}</p>
                    ))  
                }
              </div>
            </div>

            <div className='allFirstOpinionsDO'>
              <div className='imagefirstOpinionsDO'>
                {
                    dataForOpinions.filter(item=>item.id===secondImage+1).map(image=>(
                        <img src={image.img} key={image.id} alt={image.alt}/>
                    ))
                }
              </div>
              <div className='opinionFirstOpinionsDO'>
                {
                    dataForOpinions.filter(item=>item.id===secondOpinion+1).map(opinion=>(
                        <p key={opinion.id+0.5}>{opinion.opinion}</p>
                    ))  
                }
              </div>
            </div>
        </div>
    )
  }else if(selectOptions===2){
    return(
        <div className='secondChangeDO'>
          <div className='allsecondOpinionsDO'>
            <div className='opinionSecondOpinionsDO'>
              {
                dataForOpinions.filter(item=>item.id===firstOpinion+1).map(opinion=>(
                                        <p key={opinion.id+0.5}>{opinion.opinion}</p>
                )) 
              }
            </div>
            <div className='opinionSecondOpinionsDO'>
              {
                dataForOpinions.filter(item=>item.id===secondOpinion+1).map(opinion=>(
                                        <p key={opinion.id+0.5}>{opinion.opinion}</p>
                )) 
              }
            </div>

          </div>
        </div>
    )
  }else if(selectOptions===3){
    return(
        <div className='thirdChangeDO'>

          <div className='thirdAllOptionsDO'>
            <div className='imageThirdOptionsDO'>
               {
                  dataForOpinions.filter(item=>item.id===firstImage+1).map(image=>(
                    <img src={image.img} key={image.id} alt={image.alt}/>
                  ))
                }
            </div>
            <div className='optionThirdOptionDO'>
                {
                  dataForOpinions.filter(item=>item.id===firstOpinion+1).map(opinion=>(
                    <p key={opinion.id+0.5}>{opinion.opinion}</p>
                  ))  
                }
            </div>
          </div>

          <div className='thirdAllOptionsDO'>
            <div className='imageThirdOptionsDO'>
                {
                  dataForOpinions.filter(item=>item.id===secondImage+1).map(image=>(
                    <img src={image.img} key={image.id} alt={image.alt}/>
                  ))
                }
            </div>
            <div className='optionThirdOptionDO'>
                {
                  dataForOpinions.filter(item=>item.id===secondOpinion+1).map(opinion=>(
                    <p key={opinion.id+0.5}>{opinion.opinion}</p>
                  ))  
                }
            </div>
          </div>

        </div>
    )
  }
}

export default DrawDraw