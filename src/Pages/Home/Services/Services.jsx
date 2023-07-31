import React from 'react';
import { FaHouseUser, FaWarehouse, FaBed, FaStoreAlt, FaHome, FaFemale, FaMale, FaUsers } from "react-icons/fa";

const Services = () => {
    return (
        <>
        <h2 className='text-center mt-12 text-5xl font-bold uppercase text-green-600'>What you get here!</h2>
            <div className='mt-12 grid grid-cols-3 md:grid-cols-8'>
                <div className='border-2 p-3 border-gray-400 text-center'>
                    <FaHome className='text-5xl text-orange-700 mx-auto'></FaHome>
                    <h3 className='text-xl pt-2 font-semibold'>Family House</h3>
                </div>
                <div className='border-2 p-3 border-gray-400 text-center'>
                    <FaHouseUser className='text-5xl text-orange-700 mx-auto'></FaHouseUser>
                    <h3 className='text-xl pt-2 font-semibold'>Family Sublet</h3>
                </div>
                <div className='border-2 p-3 border-gray-400 text-center'>
                    <FaUsers className='text-5xl text-orange-700 mx-auto'></FaUsers>
                    <h3 className='text-xl pt-2 font-semibold'>Bachelor Mess</h3>
                </div>
                <div className='border-2 p-3 border-gray-400 text-center'>
                    <FaBed className='text-5xl text-orange-700 mx-auto'></FaBed>
                    <h3 className='text-xl pt-2 font-semibold'>Spinster Mess</h3>
                </div>
                <div className='border-2 p-3 border-gray-400 text-center'>
                    <FaMale className='text-5xl text-orange-700 mx-auto'></FaMale>
                    <h3 className='text-xl pt-2 font-semibold'>Male Sublet</h3>
                </div>
                <div className='border-2 p-3 border-gray-400 text-center'>
                    <FaFemale className='text-5xl text-orange-700 mx-auto'></FaFemale>
                    <h3 className='text-xl pt-2 font-semibold'>Female Sublet</h3>
                </div>
                <div className='border-2 p-3 border-gray-400 text-center'>
                    <FaStoreAlt className='text-5xl text-orange-700 mx-auto'></FaStoreAlt>
                    <h3 className='text-xl pt-2 font-semibold'>Store</h3>
                </div>
                <div className='border-2 p-3 border-gray-400 text-center'>
                    <FaWarehouse className='text-5xl text-orange-700 mx-auto'></FaWarehouse>
                    <h3 className='text-xl pt-2 font-semibold'>Warehouse</h3>
                </div>

            </div>
        </>
    );
};

export default Services;