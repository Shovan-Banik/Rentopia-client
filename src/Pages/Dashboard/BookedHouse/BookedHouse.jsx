import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const BookedHouse = () => {
    const [bookedProperty, setBookedProperty] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://rentopia-server.vercel.app/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookedProperty(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-12'>
            {
                bookedProperty.map(myBooking => <div key={myBooking._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={myBooking.selectedProperty.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Category: {myBooking.selectedProperty.category}</h2>
                        <p>Location: {myBooking.selectedProperty.location}</p>
                        <p>Details: {myBooking.selectedProperty.details}</p>
                        <p>Transaction Id: {myBooking.transactionId}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default BookedHouse;