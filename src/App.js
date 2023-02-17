import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Toaster} from 'react-hot-toast'
import {useSelector} from 'react-redux'
import Protected from './forBackend/protected/Protected'

import Main from './pages/mainPage/Main';
import FirstPage from './pages/templates/firstPage/FirstPage';
import Navigation from './navigation/Navigation';
import './index.css'

//Galerie
import GalleryOne from './pages/templates/galleries/gallery_one/GalleryOne.js';
import GalleryTwo from './pages/templates/galleries/gallery_two/Gallery_two.js';
import GalleryThree from './pages/templates/galleries/gallery_three/GalleryThree';
//************************************Szablony
//Circle
import Circle from './pages/templates/pageTemplates/circle/Circle';
import AboutUsCircle from './pages/templates/pageTemplates/circle/AboutUs/AboutUsCircle';
import NormalOne from './pages/templates/pageTemplates/normalOne/NormalOne';
import PalmApp from './pages/templates/firstPage/subpage/palm/PalmApp';
import ContactMovie from './pages/templates/firstPage/subpage/contactMovie/ContactMovie';
import Scrollbar from './pages/templates/technologies/scrollbar/Scrollbar';
import CircleChocieTechnologies from './pages/templates/technologies/circleChoice/CircleChocieTechnologies';
import AppDrawingOpinion from './pages/templates/technologies/drawingOpinion/AppDrawingOpinion';
import AppRelaks from './pages/templates/pageTemplates/relaks/AppRelaks';
import AppForest from './pages/templates/pageTemplates/forest/AppForest';
import Login from './pages/mainPage/login/Login';
import Gallery from './pages/mainPage/gallery/Gallery';
import AppWork from './pages/work/AppWork.js'
import Loader from './forBackend/loader/Loader';
import Cookies from './cookies/Cookies'
import PrivatePolicyIndependet from './cookies/PrivatePolicyIndependet'
import AdminPanel from './pages/myprivate/aminPanel/AdminPanel'
import EnglishAdmin from './pages/myprivate/english/EnglishAdmin'





function App(props) {

  const {loader}=useSelector(state=>state.loaderReducer)
  const AgreeCookies=localStorage.getItem('isAgree')

  return (
    <BrowserRouter>    
    <div className="App">
    <Toaster position='top-center' reverseOrder={false}/>
       {loader&&<Loader/>}
       <Navigation/>
       {!AgreeCookies&&<Cookies/>}
       <Routes>
       <Route path='/' element={<Main/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/templates' element={<FirstPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/gallery' element={<Protected><Gallery/></Protected>}/>
        <Route path='/work' element={<Protected><AppWork/></Protected>}/>
        <Route path='/privatePolicy' element={<PrivatePolicyIndependet/>}/>
        {/*Admin, Private */}
        <Route path='/admin' element={<AdminPanel/>}/>
        <Route path='/english_admin' element={<EnglishAdmin/>}/>
        {/* Templates */}
        <Route path='/templates/circle' element={<Circle/>}/>
        <Route path='/templates/circle/circleonas' element={<AboutUsCircle/>}/>
        <Route path='/templates/normalOne' element={<NormalOne/>}/>
        <Route path='/templates/relaks' element={<AppRelaks/>}/>
        <Route path='/templates/forest' element={<AppForest/>}/>
        
        {/* Gallery */}
        <Route path='/gallery_one' element={<GalleryOne/>}/>
        <Route path='/gallery_two' element={<GalleryTwo/>}/>
        <Route path='/gallery_three' element={<GalleryThree/>}/>

       {/* Subpage */}
       <Route path='/templates/palm' element={<PalmApp/>}/>
       <Route path='/templates/contact_movie' element={<ContactMovie/>}/>

       {/* Technologies */}
       <Route path='/templates/scrollbar' element={<Scrollbar/>}/>
       <Route path='/templates/circle_technology' element={<CircleChocieTechnologies/>}/>
       <Route path='/templates/drawing_opinion' element={<AppDrawingOpinion/>}/>

       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
