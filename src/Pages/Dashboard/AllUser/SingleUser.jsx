const SingleUser = ({singleUser,index}) => {
    return (
        <tr className="border-2 border-gray-300">
            <td>{index}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={singleUser.photo} alt="Avatar " />
                    </div>
                </div>
            </td>
            <td>{singleUser.name}</td>
            <td>{singleUser.email}</td>
            <td>{singleUser.role}</td>
        </tr>
    );
};

export default SingleUser;