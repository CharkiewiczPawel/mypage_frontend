import React, {useState} from 'react'
import {dataProductBeach} from './DataProduct'
import css from './Product.module.css'

function Product() {

    const [allocation, setAllocation]=useState('all')
    
    if(allocation==='all'){
        return(
          <div className={css.productBeach}>
          <h1>NASZA OFERTA</h1>
         <div className={css.selectionSectionBeach}>
            <div className={css.selectionFieldBeach}>
              <button onClick={()=>setAllocation('all')} >Wszystko</button>
              <button onClick={()=>setAllocation('choiceOne')}>Wybór I</button>
              <button onClick={()=>setAllocation('choiceTwo')}>Wybór II</button>
            </div>
            <div className={css.displayingProductsBeach}>
                {
                        dataProductBeach.map(item=>(                          
                            <img src={item.img} alt={item.title} key={item.key}/>
                        ))
                }
            </div>
          </div>
      </div>
        )
       } else if(allocation==='choiceOne'){
        return(
          <div className={css.productBeach}>
          <h1>NASZA OFERTA</h1>
         <div className={css.selectionSectionBeach}>
            <div className={css.selectionFieldBeach}>
              <button onClick={()=>setAllocation('all')} >Wszystko</button>
              <button onClick={()=>setAllocation('choiceOne')}>Wybór I</button>
              <button onClick={()=>setAllocation('choiceTwo')}>Wybór II</button>
            </div>
            <div className={css.displayingProductsBeach}>
                {
                        dataProductBeach.filter(items=>items.allocation==='beach').map(item=>(
                          <img src={item.img} alt={item.title} key={item.key}/>
                        ))
                }
            </div>
          </div>
      </div>
        )
       } else if(allocation==='choiceTwo'){
        return(
          <div className={css.productBeach}>
          <h1>NASZA OFERTA</h1>
         <div className={css.selectionSectionBeach}>
            <div className={css.selectionFieldBeach}>
              <button onClick={()=>setAllocation('all')} >Wszystko</button>
              <button onClick={()=>setAllocation('choiceOne')}>Wybór I</button>
              <button onClick={()=>setAllocation('choiceTwo')}>Wybór II</button>
            </div>
            <div className={css.displayingProductsBeach}>
                {
                        dataProductBeach.filter(items=>items.allocation==='animal').map(item=>(
                          <img src={item.img} alt={item.title} key={item.key}/>
                        ))
                }
            </div>
          </div>
      </div>
        )
       }
}

export default Product