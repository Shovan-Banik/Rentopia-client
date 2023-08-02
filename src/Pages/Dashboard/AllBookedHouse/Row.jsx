import React from 'react';

const Row = ({singleBookings,index}) => {
    return (
        <tr className="border-2 border-gray-300">
            <td>{index}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={singleBookings.selectedProperty.photo} alt="Avatar " />
                    </div>
                </div>
            </td>
            <td>{singleBookings.selectedProperty.name}</td>
            <td>{singleBookings.selectedProperty.location}</td>
            <td>{singleBookings.selectedProperty.email}</td>
            <td>{singleBookings.selectedProperty.phone}</td>
            <td>{singleBookings.selectedProperty.price}</td>
            <td>{singleBookings.transactionId}</td>
        </tr>
    );
};

export default Row;