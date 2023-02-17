import mountain from '../../../../../assets/movie/mountain.mp4'
import { useMemo } from 'react';
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './ContactMovie.css'


function ContactMovie() {

  const {isLoaded}=useLoadScript({googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY})
  
  if(!isLoaded){return<div>Tutaj zrób całość a tam gdzie jest google ekran ładowania</div>}
  if(isLoaded){
  return (
    <div className="AppCM">
      <div className='videoDivCM'>
      <video autoPlay loop muted>
        <source src={mountain} type='video/mp4'/>
      </video>
      <div className='videoDivHeaderCM'>
      <h1>Lorem ipsum</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
      </div>
      </div>
      <div className='placeContactCM'>
        <div className='contactCM'>
          <h1>Kontakt</h1>
          <h3>Adres</h3>
          <p>xxxxxx 2</p>
          <p>xx-xxxx XXXXX</p>
          <h3>Kontakt</h3>
          <p>123-123-123</p>
          <p>xxx@xxx.com</p>
          <div className='socialMediaCM'>
            <h3>Social media</h3>
            <div>
            <p><FaFacebookSquare/></p>
            <p><FaLinkedin/></p>
            <p><FaTwitter/></p>
            </div>
          </div>

        </div>          
          <div className='googleMapCM'>
            <Map/>
          </div>

      </div>
    </div>
  );}
}

export default ContactMovie;


function Map(){

  const center=useMemo(()=>({lat:50.626186, lng:17.590029}),[]);

  return(
    <GoogleMap zoom={15} center={center} mapContainerClassName='map-containerCM'>
      <MarkerF position={center}/>
    </GoogleMap>
  )
}