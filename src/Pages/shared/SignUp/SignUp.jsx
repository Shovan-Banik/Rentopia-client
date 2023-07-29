import { useForm } from "react-hook-form"
import img from '../../../assets/reg1.jpg';
import { Link, useNavigate } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const { createUser, profileUpdate,logOut } = useContext(AuthContext);
    const navigate=useNavigate();

    const inputData = async (data) => {
        const res = await fetch('http://localhost:5000/users', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        console.log(result);
      };
      const handleLogOut=()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
      }
    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                profileUpdate(data.name, data.photo);
                inputData(data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registration Successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  handleLogOut();
                  navigate('/signIn');
            })
            .catch(error => console.log(error));
    };
    

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
                            <button type="submit" className="btn btn-primary">SignUp</button>
                        </div>
                    </div>
                    <p className="text-white text-center pb-5">Already have an account? <span className="text-red-700 font-bold"><Link to='/signIn'> Sing In</Link></span></p>
                </form>
            </div >
        </div >
    );
};

export default SignUp;