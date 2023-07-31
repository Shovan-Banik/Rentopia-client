import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/services';
import Appartments from '../Appartments/Appartments';
import Statistic from '../Statistci/Statistic';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Appartments></Appartments>
            <Statistic></Statistic>
            <PhotoGallery></PhotoGallery>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;