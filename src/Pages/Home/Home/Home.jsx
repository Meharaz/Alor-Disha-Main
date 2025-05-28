import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Autoslider from '../AutoSlider/Autoslider';
import AboutUs from '../AboutUs/AboutUs';


const Home = () => {
    return (
        <div>
            <BannerSection/>
            <Autoslider/>
            <AboutUs/>
            <p>This is Home</p>
        </div>
    );
};

export default Home;