import React from 'react';
import ViewDetails from '../../ViewDetails/ViewDetails';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({propertyItem}) => {
    const{_id,name,phone,price, category,details,email,location,photo}=propertyItem;
    const navigate=useNavigate();
    const handleViewDetails=(_id)=>{
        navigate(`/viewDetails/${_id}`);
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-12">
            <figure><img src={photo} alt="home" /></figure>
            <p className='bg-black text-white absolute right-0 p-4 rounded-xl'>${price}/month</p>
            <div className="card-body">
                <h2 className="card-title">{location}</h2>
                <p>{details}</p>
                <div className="card-actions justify-start">
                    <button onClick={()=>handleViewDetails(_id)} className="btn btn-warning btn-sm">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;