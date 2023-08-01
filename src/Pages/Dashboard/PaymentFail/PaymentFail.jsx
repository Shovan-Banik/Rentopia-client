import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentFail = () => {
    const{tranId}=useParams();
    return (
        <div>
            <h2 className='text-2xl font-bold'>Payment Fail for transaction Id: {tranId}</h2>
        </div>
    );
};

export default PaymentFail;