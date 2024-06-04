import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import logo from "../../../../src/assets/fitlabLogo.png"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('login user', user)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Registration Successfully",
                    showConfirmButton: false,
                    timer: 2500
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100 shadow-xl rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content md:space-y-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            user ?
                                <>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/">Home</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/trainer">All Trainer</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/class">All Classes</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/forum">Forums</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/dashboard">Dashboard</NavLink>
                                </>
                                :
                                <>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/">Home</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/trainer">All Trainer</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/class">All Classes</NavLink>
                                   
                                </>
                        }
                    </ul>
                </div>
                <NavLink >
                    <img src={logo} className="w-32 shadow rounded-md" alt="" />
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {
                        user ?
                            <>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/">Home</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/trainer">All Trainer</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/class">All Classes</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/forum">Forums</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/beTrainer">Be Trainer</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/dashboard">Dashboard</NavLink>
                            </>
                            :
                            <>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/">Home</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/trainer">All Trainer</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/class">All Classes</NavLink>
                                
                            </>
                    }
                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end">
                        <div className="dropdown dropdown-align ml-3 dropdown-end">
                            <div tabIndex={0} role="button" className=" m-1">
                                <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img src={user.photoURL} title={user.displayName} className="object-cover w-full h-full" alt="userImg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content space-y-2 z-20 menu p-2 shadow bg-base-100 rounded-box ">
                                <>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/profile">My Profile </NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} >
                                        <button onClick={handleLogOut}>Logout</button>
                                    </NavLink>
                                </>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className="navbar-end">
                        <NavLink className={({ isActive }) => isActive ? "btn bg-[#04c70e] " : "btn bg-base-300"} to="/login">Login</NavLink>
                    </div>
            }
        </div>
    );
};

export default Navbar;











  
  