import animation from '../../assets/annimation/animation_lkjtk6ub.json';
import Lottie from "lottie-react";
import { useForm } from "react-hook-form"
const AddHome = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="hero min-h-screen bg-base-200 pt-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                    <div>
                        <h1 className="text-3xl text-center pt-2 font-bold">Fill The Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">
                                <div className='md:flex gap-4'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Owner Name</span>
                                        </label>
                                        <input type='text' {...register("name", { required: true })} className="input input-bordered" />
                                        {errors.name && <span>This field is required</span>}
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Photo of property</span>
                                        </label>
                                        <input type='file' {...register("photo", { required: true })} className="file-input file-input-bordered w-full" />
                                        {errors.photo && <span>This field is required</span>}
                                    </div>
                                </div>

                                <div className='md:flex gap-4'>
                                    <div className="form-control  w-full">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type='email' {...register("email", { required: true })} className="input input-bordered" />
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                    <div className="form-control  w-full">
                                        <label className="label">
                                            <span className="label-text">Phone number</span>
                                        </label>
                                        <input type='number' {...register("phone", { required: true })} className="input input-bordered" />
                                        {errors.phone && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className='md:flex gap-4'>
                                    <div className="form-control  w-full">
                                        <label className="label">
                                            <span className="label-text">Location</span>
                                        </label>
                                        <input type='text' {...register("location", { required: true })} className="input input-bordered" />
                                        {errors.location && <span>This field is required</span>}
                                    </div>
                                    <div className="form-control  w-full">
                                        <label className="label">
                                            <span className="label-text">Price:(/month)</span>
                                        </label>
                                        <input type='number' {...register("price", { required: true })} className="input input-bordered" />
                                        {errors.price && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select {...register("category", { required: true })} className="input input-bordered">
                                        <option value="Family House">Family House</option>
                                        <option value="Family Sublet">Family Sublet</option>
                                        <option value="Bachelor Mess">Bachelor Mess</option>
                                        <option value="Spinster Mess">Spinster Mess</option>
                                        <option value="Male Sublet">Male Sublet</option>
                                        <option value="Female Sublet">Female Sublet</option>
                                        <option value="Store">Store</option>
                                        <option value="Ware House">Ware House</option>
                                    </select>
                                    {errors.role && <span>This field is required</span>}
                                </div>
                                <div className="form-control  w-full">
                                        <label className="label">
                                            <span className="label-text">Details</span>
                                        </label>
                                        <textarea type='number' {...register("details", { required: true })} className="textarea textarea-bordered h-24" />
                                        {errors.price && <span>This field is required</span>}
                                    </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary bg-sky-500">Add Your Property</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="text-center lg:text-left w-full md:w-1/2">
                    <Lottie animationData={animation} loop={true} />;
                </div>
            </div >
        </div>
    );
};

export default AddHome;