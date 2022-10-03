

import React, { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// import Fcleaning from '../Components/Fcleaning/Fcleaning';
// import NavBar from '../Components/NavBar/NavBar';
// import Footer from '../Components/Footer/Footer';
// import NotFound from '../NotFound/NotFound';
// import ContactUs from '../Components/ContactUs/ContactUs';
// import AboutUs from '../Components/AboutUs/AboutUs';
// import Review from '../Components/Review/Review';
// import StandardCleaning from '../Components/StandardCleaning/StandardCleaning';
// import DeepCleaning from '../Components/DeepCleaning/DeepCleaning';
// import AirBnb from '../Components/AirBnb/AirBnb';
// import CommercialCleaning from '../Components/CommercialCleaning/CommercialCleaning';
// import WindowsCleaning from '../Components/WindowsCleaning/WindowsCleaning';
// import CarpetCleaning from '../Components/CarpetCleaning/CarpetCleaning';
// import PostConstruction from '../Components/PostConstruction/PostConstruction';
// import MoveInMoveOut from '../Components/MoveInMoveOut/MoveInMoveOut';

import PreLoader from '../Components/Preloader/Preloader';



const Fcleaning = lazy(()=> import('../Components/Fcleaning/Fcleaning'))
const NavBar = lazy(()=> import('../Components/NavBar/NavBar'))
const Footer = lazy(()=> import('../Components/Footer/Footer'))
const NotFound = lazy(()=> import('../NotFound/NotFound'))
const ContactUs = lazy(()=> import('../Components/ContactUs/ContactUs'))
const AboutUs = lazy(()=> import('../Components/AboutUs/AboutUs'))
const Review = lazy(()=> import('../Components/Review/Review'))
const StandardCleaning = lazy(()=> import('../Components/StandardCleaning/StandardCleaning'))
const DeepCleaning = lazy(()=> import('../Components/DeepCleaning/DeepCleaning'))
const AirBnb = lazy(()=> import('../Components/AirBnb/AirBnb'))
const CommercialCleaning = lazy(()=> import('../Components/CommercialCleaning/CommercialCleaning'))
const WindowsCleaning = lazy(()=> import('../Components/WindowsCleaning/WindowsCleaning'))
const CarpetCleaning = lazy(()=> import('../Components/CarpetCleaning/CarpetCleaning'))
const PostConstruction = lazy(()=> import('../Components/PostConstruction/PostConstruction'))
const MoveInMoveOut = lazy(()=> import('../Components/MoveInMoveOut/MoveInMoveOut'))

const App = ({ appName })=>{

  return (<>

    <div>
      <NavBar />
    </div>

    <section>
      <Suspense fallback={ <PreLoader />}>
      <Routes>
      

        <Route path="*" element={ <NotFound /> } />
        <Route path="/" element={ <Fcleaning /> } />
        <Route path='/about-us' element={ <AboutUs /> } />
        <Route path="/contacts" element={ <ContactUs /> } />
        <Route path='/reviews' element={ <Review /> } />
        <Route path="/standard-cleaning" element={ <StandardCleaning/> } />
        <Route path="/deep-cleaning" element={ <DeepCleaning /> } />
        <Route path="/airbnb-cleaning" element={ <AirBnb/> } />
        <Route path="/commercial-cleaning" element={ <CommercialCleaning /> } />
        <Route path="/windows-cleaning" element={ <WindowsCleaning /> } />
        <Route path="/carpet-cleaning" element={ <CarpetCleaning /> } />
        <Route path="/post-construction" element={ <PostConstruction /> } />
        <Route path="/move-inout" element={ <MoveInMoveOut /> } />
        

      </Routes>
      </Suspense>
    </section>

    <div>
      <Footer />
    </div>

  </>)
};



export default App;