
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useUserFromDB from "../../../hooks/useUserFromDB";
import Swal from "sweetalert2";


const UpdateProperty = () => {
    const { name, price, category, location, photo, phone, details } = useLoaderData();
    const { id } = useParams();
    const [refetch] = useUserFromDB();
    const navigate = useNavigate();

    const handleUpdateProperty = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const photo = form.photo.value;
        const location = form.location.location;
        const category = form.category.value;
        const details = form.details.value;

        const modifiedData = {
            name,
            price,
            phone,
            photo,
            category,
            details,
            location
        }

        fetch(`http://localhost:5000/properties/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modifiedData)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/dashboard/addedProperty');
                refetch();
                console.log(data)
                
            })
    }

       


    return (
        <div className="md:w-2/3 mx-auto border-2 border-blue-800 p-4 mt-12 rounded-xl">
            <h2 className="font-bold text-blue-800 text-3xl my-5 text-center">Update Your Property</h2>
            <div className="card-body">
                <form onSubmit={handleUpdateProperty}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Name</span>
                            </label>
                            <input type="text" name="name" required readOnly defaultValue={name} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Price</span>
                            </label>
                            <input type="number" min={0} step="any" defaultValue={price} required name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Phone</span>
                            </label>
                            <input type="text" defaultValue={phone} required name="phone" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Photo</span>
                            </label>
                            <input type="url" readOnly name="photo" defaultValue={photo} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Location</span>
                            </label>
                            <input type="text" readOnly name="location" defaultValue={location} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800">Details</span>
                            </label>
                            <input type="text" defaultValue={details} required name="details" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-blue-800"> Please select an option</span>
                            </label>
                            <select className="block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="category" defaultValue={category} disabled>
                                <option disabled>
                                    Category
                                </option>
                                <option value="Family House">Family House</option>
                                <option value="Family Sublet">Family Sublet</option>
                                <option value="Bachelor Mess">Bachelor Mess</option>
                                <option value="Spinster Mess">Spinster Mess</option>
                                <option value="Male Sublet">Male Sublet</option>
                                <option value="Female Sublet">Female Sublet</option>
                                <option value="Store">Store</option>
                                <option value="Ware House">Ware House</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProperty;