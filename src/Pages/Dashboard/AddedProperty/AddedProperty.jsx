import React from 'react';
import useSinglePropertyDB from '../../../hooks/useSinglePropertyDB';
import SingleProp from './SingleProp';
import { Helmet } from 'react-helmet-async';

const AddedProperty = () => {
    const [singleAddedProperty, refetch] = useSinglePropertyDB();
    console.log(singleAddedProperty);
    return (
        <>
            <Helmet>
                <title>Rentopia | Added Property</title>
            </Helmet>
            <div className="overflow-x-auto p-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* row 1 */}
                        {
                            singleAddedProperty.map((singleProperty, index) => <SingleProp
                                key={singleProperty._id}
                                singleProperty={singleProperty}
                                index={index + 1}
                                refetch={refetch}
                            ></SingleProp>)
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AddedProperty;