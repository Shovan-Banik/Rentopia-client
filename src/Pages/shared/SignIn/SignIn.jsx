import { useForm } from "react-hook-form"
import img from '../../../assets/reg1.jpg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
    const{signIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) =>{
        signIn(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, { replace: true });
        })
        .catch(error=>console.log(error))
    }
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
                            <button type="submit" className="btn btn-primary">SignIn</button>
                        </div>
                    </div>
                    <p className="text-white text-center pb-72 md:pb-24">New to here? <span className="text-red-700 font-bold"><Link to='/signUp'> SingUP</Link></span></p>
                </form>
            </div >
        </div >
    );
};

export default SignIn;