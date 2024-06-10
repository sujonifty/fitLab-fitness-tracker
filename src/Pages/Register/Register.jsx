import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUserProfile,error,setError } = useContext(AuthContext);
    const navigate=useNavigate();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        //create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            roll: 'Member'
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    // console.log('user inserted database')
                                    reset();
                                    Swal.fire({
                                        icon: "success",
                                        title: "Registration Successfully",
                                        showConfirmButton: false,
                                        timer: 2500
                                    });
                                    // navigate('/');
                                }
                            })


                    })
                    .catch((error) => setError(error.message))
            })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/V9ZLRJX/register.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter your name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Enter your photoURL" className="input input-bordered" />
                            {errors.photo && <span className="text-red-600">PhotoURL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/, minLength: 6, maxLength: 20 })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one upper & lowercase,number,special key.</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less than 20 characters</span>}
                        </div>
                        {
                                error && <small className="text-red-700">{error}</small>
                            }
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign up" />
                        </div>
                    </form>
                    <p className=" text-center my-5"><small>Have an account? <Link to="/login" className="text-blue-600">Go to Login</Link></small></p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Register;