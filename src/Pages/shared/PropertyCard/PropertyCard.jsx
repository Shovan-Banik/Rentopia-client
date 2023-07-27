import React from 'react';

const PropertyCard = ({propertyItem}) => {
    const{name,phone,price, category,details,email,location,photo}=propertyItem;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-12">
            <figure><img src={photo} alt="home" /></figure>
            <p className='bg-black text-white absolute right-0 p-4 rounded-xl'>${price}/month</p>
            <div className="card-body">
                <h2 className="card-title">{location}</h2>
                <p>{details}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-warning btn-sm">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;