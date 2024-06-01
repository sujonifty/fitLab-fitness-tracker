import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content md:space-y-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            user ?
                                <>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/">Home</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/trainer">All Trainer</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/class">All Classes</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/forum">Forums</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/dashboard">Dashboard</NavLink>
                                </>
                                :
                                <>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/">Home</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/trainer">All Trainer</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/class">All Classes</NavLink>
                                    {/* <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/register">Register</NavLink>
            <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/login">Login</NavLink> */}
                                </>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">FitLab</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {
                        user ?
                            <>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/">Home</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/trainer">All Trainer</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/class">All Classes</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/forum">Forums</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/dashboard">Dashboard</NavLink>
                            </>
                            :
                            <>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/">Home</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/trainer">All Trainer</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/class">All Classes</NavLink>
                                {/* <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/register">Register</NavLink>
            <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/login">Login</NavLink> */}
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
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/profile">My Profile </NavLink>
                                    <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} >
                                        <button >Logout</button>
                                    </NavLink>
                                </>
                            </ul>
                        </div>
                    </div>
                    :
                    <NavLink className={({ isActive }) => isActive ? "btn bg-rose-400 " : "btn bg-base-300"} to="/login">Login</NavLink>
            }
        </div>
    );
};

export default Navbar;