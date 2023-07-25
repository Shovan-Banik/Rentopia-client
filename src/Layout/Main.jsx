import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[760px] md:min-h-[558px]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;