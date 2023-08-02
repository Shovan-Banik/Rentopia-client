import React, { useEffect, useState } from 'react';
import Row from './Row';
import { Helmet } from 'react-helmet-async';


const AllBookedHouse = () => {
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch('https://rentopia-server.vercel.app/allBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [])
    return (
        <>
            <Helmet>
                <title>Rentopia | All Booked House</title>
            </Helmet>
            <div className="overflow-x-auto p-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Location</th>
                            <th>Owner Name</th>
                            <th>Client Email</th>
                            <th>Client Phone</th>
                            <th>Payment Amount</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* row 1 */}
                        {
                            allBookings.map((singleBookings, index) => <Row
                                key={singleBookings._id}
                                singleBookings={singleBookings}
                                index={index + 1}
                            ></Row>)
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllBookedHouse;