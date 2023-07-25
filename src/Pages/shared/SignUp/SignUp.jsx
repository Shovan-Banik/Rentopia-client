import { useForm } from "react-hook-form"
import img from '../../../assets/reg1.jpg';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const SignUp = () => {
    const{createUser,profileUpdate}=useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            profileUpdate(data.name,data.photo);

           useEffect(()=>{
            fetch('',{
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
           },[])
        })
        .catch(error=>console.log(error));
    }

    return (
        <div className=" bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
            <h2 className="text-3xl font-bold text-center pt-24 pb-5 text-white">SignUp Please</h2>
            <div className="md:w-1/3 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input {...register("name", { required: true })} className="input input-bordered" />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo URL</span>
                            </label>
                            <input {...register("photo", { required: true })} className="input input-bordered" />
                            {errors.photo && <span>This field is required</span>}
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Role</span>
                            </label>
                            <select {...register("role", { required: true })} className="input input-bordered">
                                <option value="client">Client</option>
                                <option value="owner">Owner</option>
                            </select>
                            {errors.role && <span>This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </div>
                    <p className="text-white text-center pb-5">Already have an account? <span className="text-red-700 font-bold"><Link to='/signIn'> Sing In</Link></span></p>
                </form>
            </div >
        </div >
    );
};

export default SignUp;