import { useForm } from "react-hook-form"
import img from '../../../assets/reg1.jpg';
import { Link } from "react-router-dom";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <div className=" bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
            <h2 className="text-3xl font-bold text-center pt-24 pb-5 text-white">SignIn Please</h2>
            <div className="md:w-1/3 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input {...register("password", { required: true })} className="input input-bordered" />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignIn</button>
                        </div>
                    </div>
                    <p className="text-white text-center pb-24">New to here? <span className="text-red-700 font-bold"><Link to='/signUp'> SingUP</Link></span></p>
                </form>
            </div >
        </div >
    );
};

export default SignIn;