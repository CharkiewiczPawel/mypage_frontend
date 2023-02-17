import React from "react";
import './BubbleSkills.css'

import bubbleCss from '../../../assets/bubbles/bubbleCss.png'
import bubbleHtml from '../../../assets/bubbles/bubbleHtml.png'
import bubbleJs from '../../../assets/bubbles/bubbleJS.png'
import bubbleReact from '../../../assets/bubbles/bubbleReact.png'
import bubbleTS from '../../../assets/bubbles/bubbleTS.png'



class BubbleSkills extends React.Component{
  constructor(){
    super();
     this.width=850;
     this.widthX=690;
     this.height=600;
     this.heightY=440
     this.state={
      bubbleTopCss:Math.floor(Math.random()*300),
      bubbleTopHtml:Math.floor(Math.random()*300),
      bubbleTopJs:Math.floor(Math.random()*300),
      bubbleTopReact:Math.floor(Math.random()*300),
      bubbleTopTS:Math.floor(Math.random()*300),


      bubbleLevelCss:Math.floor(Math.random()*300),
      bubbleLevelHtml:Math.floor(Math.random()*300),
      bubbleLevelJs:Math.floor(Math.random()*300),
      bubbleLevelReact:Math.floor(Math.random()*300),
      bubbleLevelTS:Math.floor(Math.random()*300),

      speedXCss:Math.floor((Math.random()*100)),
      speedXHtml:Math.floor((Math.random()*100)),
      speedXJs:Math.floor((Math.random()*100)),
      speedXReact:Math.floor((Math.random()*100)),
      speedXTS:Math.floor((Math.random()*100)),

      speedYCss:Math.floor((Math.random()*100)),
      speedYHtml:Math.floor((Math.random()*100)),
      speedYJs:Math.floor((Math.random()*100)),
      speedYReact:Math.floor((Math.random()*100)),
      speedYTS:Math.floor((Math.random()*100)),

      isOpen:false,
     };
     this.update=this.update.bind(this)
  }

  componentDidMount() {
    let lastTime;
    const callBack = (millis) => {
      if (lastTime) {
        this.update((millis - lastTime) / 500)
      }
      lastTime = millis
      requestAnimationFrame(callBack)
    }
    callBack();
  }

  update(data){
    let bubbleXCss=this.state.bubbleLevelCss+this.state.speedXCss*data
    let bubbleXHtml=this.state.bubbleLevelHtml+this.state.speedXHtml*data
    let bubbleXJs=this.state.bubbleLevelJs+this.state.speedXJs*data
    let bubbleXReact=this.state.bubbleLevelReact+this.state.speedXReact*data
    let bubbleXTS=this.state.bubbleLevelTS+this.state.speedXTS*data

    let bubbleYCss=this.state.bubbleTopCss+this.state.speedYCss*data
    let bubbleYHtml=this.state.bubbleTopHtml+this.state.speedYHtml*data
    let bubbleYJs=this.state.bubbleTopJs+this.state.speedYJs*data
    let bubbleYReact=this.state.bubbleTopReact+this.state.speedYReact*data
    let bubbleYTS=this.state.bubbleTopTS+this.state.speedYTS*data

    this.setState({
      bubbleTopCss:bubbleYCss,
      bubbleTopHtml:bubbleYHtml,
      bubbleTopJs:bubbleYJs,
      bubbleTopReact:bubbleYReact,
      bubbleTopTS:bubbleYTS,

      bubbleLevelCss:bubbleXCss,
      bubbleLevelHtml:bubbleXHtml,
      bubbleLevelJs:bubbleXJs,
      bubbleLevelReact:bubbleXReact,
      bubbleLevelTS:bubbleXTS,
    })
    if(bubbleXCss<0||bubbleXCss>this.widthX){
      this.setState({
        speedXCss:-this.state.speedXCss
      })
    }
    if(bubbleXHtml<0||bubbleXHtml>this.widthX){
      this.setState({
        speedXHtml:-this.state.speedXHtml
      })
    }
    if(bubbleXJs<0||bubbleXJs>this.widthX){
      this.setState({
        speedXJs:-this.state.speedXJs
      })
    }
    if(bubbleXReact<0||bubbleXReact>this.widthX){
      this.setState({
        speedXReact:-this.state.speedXReact
      })
    }
    if(bubbleXTS<0||bubbleXTS>this.widthX){
      this.setState({
        speedXTS:-this.state.speedXTS
      })
    }

    if(bubbleYCss<0||bubbleYCss>this.heightY){
      this.setState({
        speedYCss:-this.state.speedYCss
      })
    }
    if(bubbleYHtml<0||bubbleYHtml>this.heightY){
      this.setState({
        speedYHtml:-this.state.speedYHtml
      })
    }
    if(bubbleYJs<0||bubbleYJs>this.heightY){
      this.setState({
        speedYJs:-this.state.speedYJs
      })
    }
    if(bubbleYReact<0||bubbleYReact>this.heightY){
      this.setState({
        speedYReact:-this.state.speedYReact
      })
    }
    if(bubbleYTS<0||bubbleYTS>this.heightY){
      this.setState({
        speedYTS:-this.state.speedYTS
      })
    }

  }




  render(){
    return(
      <div className="boardBubble">          
            <div style={{width:this.width, height:this.height}} className="Board">
              <img src={bubbleCss} style={{top:this.state.bubbleTopCss, left:this.state.bubbleLevelCss}} alt='BańkaCss' className='bubbleImg'/>
              <img src={bubbleHtml} style={{top:this.state.bubbleTopHtml, left:this.state.bubbleLevelHtml}} alt='bańkaHtml' className='bubbleImg'/>
              <img src={bubbleJs} style={{top:this.state.bubbleTopJs, left:this.state.bubbleLevelJs}} alt='bańkaJavaScript' className='bubbleImg'/>
              <img src={bubbleReact} style={{top:this.state.bubbleTopReact, left:this.state.bubbleLevelReact}} alt='bańkaReact' className='bubbleImg'/>
              <img src={bubbleTS} style={{top:this.state.bubbleTopTS, left:this.state.bubbleLevelTS}} alt='bańkaTypeScript' className='bubbleImg'/>
            </div>     
      </div>
    )
  }

}

export default BubbleSkills