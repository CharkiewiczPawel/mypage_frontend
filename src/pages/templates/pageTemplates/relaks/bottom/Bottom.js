import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './Bottom.css'

import lens from '../../../../../assets/forProjects/stock/lens.png'

function Bottom() {

    const {isLoaded}=useLoadScript({googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY})

 if(isLoaded){
  return (
    <div className='bottomRELAKS' id='contact'>
      <div className='logoBottomRelaksRELAKS'>
        <img src={lens} alt='logo'/>
        <p>LOGO</p>   
      </div> 
      <div className='contactRELAKS'>
        <h1>Kontakt</h1>
        <p>Tel: xxx xxx xxx</p>
        <p>email: xxx@xxx.pl</p>
      </div> 
      <div className='addressRELAKS'>
          <h1>Adres</h1>
          <p>xyz</p>
          <p>xyz 781</p>   
      </div>
        <div className='googleMapRELAKS'>
            <Map/>
        </div>
    </div>
  )}else{
    return (
        <div className='bottomRELAKS'>
          <div className='logoBottomRelaksRELAKS'>
            <img src={lens} alt='logo'/>
            <p>LOGO</p>   
          </div> 
          <div className='contactRELAKS'>
            <h1>Kontakt</h1>
            <p>Tel: xxx xxx xxx</p>
            <p>email: xxx@xxx.pl</p>
          </div> 
          <div className='addressRELAKS'>
              <h1>Adres</h1>
              <p>xyz</p>
              <p>xyz 781</p>   
          </div>
        </div>
      )
  }
}

export default Bottom



function Map(){

    const center=useMemo(()=>({lat:50.626186, lng:17.590029}),[]);
  
    return(
      <GoogleMap zoom={15} center={center} mapContainerClassName='map-containerRELAKS'>
        <MarkerF position={center}/>
      </GoogleMap>
    )
  }