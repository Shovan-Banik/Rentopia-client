import React from 'react';
import useProperty from '../../../hooks/useProperty';
import House from './House';
import Marquee from "react-fast-marquee";

const Appartments = () => {
    const [category] = useProperty();
    const familyHouse = category.filter(house => house.category === 'Family House');
    return (
        <>
            <div className='mt-12'>
                <h2 className='uppercase text-5xl font-bold text-center text-green-600'>Family Apartments</h2>
                <p className='font-bold text-center pt-2 pb-5'>FIND YOUR ROOMS, FOR YOUR ABAILITY</p>
            </div>
            <Marquee className='my-12'>
                <div className='grid grid-cols-4'>
                    {familyHouse.map(singleHouse => <House
                        key={singleHouse._id}
                        singleHouse={singleHouse}
                    ></House>)}
                </div>
            </Marquee>
        </>

    );
};

export default Appartments;