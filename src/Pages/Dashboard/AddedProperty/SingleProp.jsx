import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleProp = ({singleProperty,index,refetch}) => {
    const navigate=useNavigate();
    const handleDelete=singleProperty=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://rentopia-server.vercel.app/property/${singleProperty._id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
       
    }

    const handleUpdate=(singleProperty)=>{
        navigate(`/dashboard/updateProperty/${singleProperty._id}`);
    }
    
    return (
        <tr className="border-2 border-gray-300">
            <td>{index}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={singleProperty.photo} alt="Avatar " />
                    </div>
                </div>
            </td>
            <td>{singleProperty.location}</td>
            <td>{singleProperty.price}</td>
            <td>{singleProperty.details}</td>
            <td>{singleProperty.phone}</td>
            <td>{singleProperty.contact}</td>
            <td>
                <button onClick={()=>handleUpdate(singleProperty)} className="btn btn-warning btn-sm "><FaEdit className="text-2xl"></FaEdit></button>
            </td>
            <td>
                <button onClick={()=>handleDelete(singleProperty)} className="btn btn-error btn-sm text-2xl"><FaTrashAlt></FaTrashAlt></button>
            </td>
        </tr>
    );
};

export default SingleProp;