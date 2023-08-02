import React from 'react';

const House = ({ singleHouse }) => {
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl mx-5">
  <figure><img className='h-60' src={singleHouse.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2><span className='font-bold text-green-800'>House Owner:</span> {singleHouse.name}</h2>
    <p><span className='font-bold text-green-800'>Price:</span> {singleHouse.price}</p>
    <p><span className='font-bold text-green-800'>Location:</span> {singleHouse.location}</p>
    <p><span className='font-bold text-green-800'>Details:</span> {singleHouse.details}</p>
  </div>
</div>
    );
};

export default House;