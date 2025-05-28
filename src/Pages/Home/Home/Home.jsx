import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Autoslider from '../AutoSlider/Autoslider';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            
            <Autoslider/>
            <AboutUs/>
            <Services/>
            
        </div>
    );
};

export default Home;