import useUserFromDB from "../../../hooks/useUserFromDB";

const AllUser = () => {
    const[allUser]=useUserFromDB();
    console.log(allUser);
    return (
        <div>
            <h1>ok</h1>
        </div>
    );
};

export default AllUser;