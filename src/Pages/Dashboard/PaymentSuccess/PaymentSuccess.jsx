import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const{tranId}=useParams();
    return (
        <div>
            <h2 className='text-2xl font-bold'>Payment Successful for Transaction Id: {tranId}</h2>
        </div>
    );
};

export default PaymentSuccess;