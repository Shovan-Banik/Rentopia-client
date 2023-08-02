import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/services';
import Appartments from '../Appartments/Appartments';
import Statistic from '../Statistci/Statistic';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Rentopia | Home</title>
            </Helmet>
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