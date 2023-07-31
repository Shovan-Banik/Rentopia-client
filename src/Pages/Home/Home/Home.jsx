import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/services';
import Appartments from '../Appartments/Appartments';
import Statistic from '../Statistci/Statistic';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Appartments></Appartments>
            <Statistic></Statistic>
        </div>
    );
};

export default Home;