import React from 'react';
import useWishList from '../../../hooks/useWishList';
import TableRow from './TableRow';

const MyWishList = () => {
    const [wishList,refetch] = useWishList();
    return (
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
                        wishList.map((row,index)=><TableRow 
                        key={row._id}
                        row={row}
                        index={index+1}
                        refetch={refetch}
                        ></TableRow>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyWishList;