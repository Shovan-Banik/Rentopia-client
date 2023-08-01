import { FaTrashAlt, FaMoneyCheckAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const TableRow = ({ row, index, refetch }) => {
    const navigate=useNavigate();
    
    const handleDelete = row => {
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
                fetch(`http://localhost:5000/wishLists/${row._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
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
    const handleBooking=(row)=>{
        navigate(`/dashboard/bookings/${row._id}`);
    }

    return (
        <tr className="border-2 border-gray-300">
            <td>{index}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={row.photo} alt="Avatar " />
                    </div>
                </div>
            </td>
            <td>{row.location}</td>
            <td>{row.price}</td>
            <td>{row.details}</td>
            <td>{row.phone}</td>
            <td>{row.contact}</td>
            <td>
                <button onClick={() => handleBooking(row)} className="btn btn-warning btn-sm "><FaMoneyCheckAlt className="text-2xl"></FaMoneyCheckAlt></button>
            </td>
            <td>
                <button onClick={() => handleDelete(row)} className="btn btn-error btn-sm text-2xl"><FaTrashAlt></FaTrashAlt></button>
            </td>
        </tr>
    );
};

export default TableRow;