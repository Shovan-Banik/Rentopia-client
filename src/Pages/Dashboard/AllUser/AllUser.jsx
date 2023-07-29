import useUserFromDB from "../../../hooks/useUserFromDB";
import SingleUser from "./SingleUser";

const AllUser = () => {
    const[allUser,refetch]=useUserFromDB();
    console.log(allUser);
    return (
        <div className="overflow-x-auto p-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {/* row 1 */}
                    {
                        allUser.map((singleUser,index)=><SingleUser 
                        key={singleUser._id}
                        singleUser={singleUser}
                        index={index+1}
                        refetch={refetch}
                        ></SingleUser>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;