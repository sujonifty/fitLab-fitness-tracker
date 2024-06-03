import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";


const BeTrainer = () => {
    const { user } = useContext(AuthContext);
    const handleBeTrainer = (e) => {

    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/pzRtWs9/betrainer.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <Helmet><title>fitLab | BeTrainer</title></Helmet>
                    <h1 className="mb-5 text-5xl font-bold">Become a trainer</h1>
                    <div className="bg-opacity-20 my-16 text-base-content border-2  border-gray-400 card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleBeTrainer} className="p-5 bg-gray-300 rounded-lg card-body space-y-5">

                            <div className="form-control w-11/12 mx-auto ">
                                <input name="name" type="name" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered " required />
                            </div>
                            <div className="form-control w-11/12 mx-auto">
                                <input name="email" type="email" defaultValue={user?.email} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control w-11/12 mx-auto">
                                <input name="photo" type="photo" placeholder=" Your photoURL" defaultValue={user?.photoURL} className="input input-bordered" required />
                            </div>
                            <div className="form-control w-11/12 mx-auto ">
                                <input name="age" type="age" placeholder="Your age" className="input input-bordered" required />
                            </div>
                            <select name="skill" className="mx-auto select select-bordered w-full max-w-xs">
                                <option disabled selected>Skills</option>
                                <option>YOGA</option>
                                <option>CARDIO BURN</option>
                            </select>
                            <div className="flex justify-center items-center gap-5 -ml-3">
                                <div className="form-control w-11/12 mx-auto">
                                    <div className="dropdown dropdown-hover">
                                        <div tabIndex={0} role="button" className="btn m-1">Available Day</div>
                                        <ul tabIndex={0} name="day" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><a>Saturday</a></li>
                                            <li><a>Sunday</a></li>
                                            <li><a>Monday</a></li>
                                            <li><a>Tuesday</a></li>
                                            <li><a>wednesday</a></li>
                                            <li><a>Thursday</a></li>
                                            <li><a>Friday</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-control w-11/12 mx-auto -ml-5">
                                    <input name="time" type="time" placeholder="Available Time" className="input input-bordered" required />
                                </div>
                            </div>
                            
                            <div className="form-control w-11/12 mx-auto mt-6">
                                <input type="submit" className="btn bg-[#D2B48C]" value="Apply Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeTrainer;