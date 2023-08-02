import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom";


const Booking = () => {
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.productId=id;

        fetch('https://rentopia-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            window.location.replace(result.url);
            console.log(result);
        })
    };


    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold text-center pt-24 pb-5">Payment</h2>
            <div className="md:w-1/2 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Name</span>
                            </label>
                            <input {...register("name", { required: true })} className="input input-bordered" />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Phone Number</span>
                            </label>
                            <input {...register("phone", { required: true })} className="input input-bordered" />
                            {errors.phone && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Location</span>
                            </label>
                            <input {...register("location", { required: true })} className="input input-bordered" />
                            {errors.location && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Currency</span>
                            </label>
                            <select {...register("currency", { required: true })} className="input input-bordered">
                                <option value="BDT">BDT</option>
                                <option value="USD">USD</option>
                                <option value="Euro">Euro</option>
                            </select>
                            {errors.currency && <span>This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Pay</button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default Booking;