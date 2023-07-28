import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const ViewDetails = () => {
    const { id } = useParams();
    const [information, setInformation] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/property/${id}`)
            .then(res => res.json())
            .then(data => {
                setInformation(data);
                
            })
    }, [id])
    const { name, phone, price, category, details, location, photo, _id } = information;

    const handleWishList = (information) => {
        const { name, phone, price, category, details, location, photo, _id } = information;
        const wishListItem = { ItemId: _id, name, phone, details, category,photo, location, price, email: user.email };
        fetch('http://localhost:5000/wishLists', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(wishListItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Added successfully in wish list',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
        return (
            <div className="card md:card-side bg-base-100 shadow-3xl md:py-24 md:pl-8 md:pr-8 py-5">
                <figure><img src={photo} alt="house" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Owner Name: {name}</h2>
                    <p>Contact: {phone}</p>
                    <p>Price: ${price}</p>
                    <p>Category: {category}</p>
                    <p>Location: {location}</p>
                    <p>Details: {details}</p>
                    <div className="card-actions justify-start">
                        <button onClick={() => handleWishList(information)} className="btn btn-primary">Add to WishList</button>
                    </div>
                </div>
            </div>
        );
    };

    export default ViewDetails;