import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { id } = useParams();
    const [information, setInformation] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/property/${id}`)
            .then(res => res.json())
            .then(data => setInformation(data))
    }, [])
    const{name,phone,price, category,details,email,location,photo}=information;
    return (
        <div className="card md:card-side bg-base-100 shadow-3xl md:py-24 md:pl-8 md:pr-8 py-5">
            <figure><img src={photo} alt="house" /></figure>
            <div className="card-body">
                <h2 className="card-title">Owner Name: {name}</h2>
                <p>Contact: {phone}</p>
                <p>Email: {email}</p>
                <p>Price: ${price}</p>
                <p>Category: {category}</p>
                <p>Location: {location}</p>
                <p>Details: {details}</p>
                {/* <div className="card-actions justify-start">
                    <button className="btn btn-primary">Watch</button>
                </div> */}
            </div>
        </div>
    );
};

export default ViewDetails;