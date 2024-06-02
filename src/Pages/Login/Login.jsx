import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createLogin, error, setError,} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");

        createLogin(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate(from, { replace: true });

            })
            .catch(error => {
                if (error.message) {
                    setError('Email or password is wrong')
                }

            })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/X5WJqJr/login.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <Helmet><title>fitLab | Login</title></Helmet>
                    <h1 className="mb-5 text-5xl font-bold">Login Now</h1>
                    <div className="bg-opacity-20 text-base-content border-2 border-gray-400 card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="p-5 card-body bg-[url('../assets/7.jpg')]">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="grow p-2 rounded-lg"
                                    placeholder="password" />

                                <span onClick={() => { setShowPassword(!showPassword) }}>
                                    {
                                        showPassword ? <IoMdEyeOff /> : <IoMdEye />

                                    }
                                </span>

                            </label>
                            {
                                error && <small className="text-red-700">{error}</small>
                            }
                            <div className="form-control mt-6">
                                <button className="btn hover:bg-[#D2B48C] hover:text-white">Login</button>
                            </div>
                            <p>Do not have an account? Please <Link to="/register" className="text-blue-700 font-semibold">Register</Link></p>
                        </form>

                        <div className="divider">OR</div>
                        <div className="form-control my-6">
                            <button className="btn"><FaGoogle></FaGoogle></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;