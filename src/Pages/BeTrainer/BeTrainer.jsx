import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const BeTrainer = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic= useAxiosPublic();
    const handleBeTrainer = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const age = e.target.age.value;
        const skill = e.target.skill.value;
        const day = e.target.day.value;
        const time = e.target.time.value;
        const status ='Pending';
        const applicantInfo = { name, email, photo, age, skill, day, time, status }
        // console.log(applicantInfo)
        axiosPublic.post('/appliedTrainer', applicantInfo)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Submission Successfully",
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        })
        .catch(error => {
            if (error.message) {
                console.log(error.message);
            }

        })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/pzRtWs9/betrainer.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <Helmet><title>fitLab | BeTrainer</title></Helmet>
                    <h1 className="mb-5 text-5xl font-bold">Become a trainer</h1>
                    <div className="bg-opacity-20 my-16 text-base-content border-2  border-gray-400 card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleBeTrainer} className="p-5 bg-gray-300 rounded-lg card-body ">

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>                                <input name="name" type="name" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered " required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" defaultValue={user?.email} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name="photo" type="photo" placeholder=" Your photoURL" defaultValue={user?.photoURL} className="input input-bordered" required />
                            </div>
                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Age</span>
                                </label>
                                <input name="age" type="age" placeholder="Your age" className="input input-bordered" required />
                            </div>
                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Skills</span>
                                </label>
                                <select name="skill" className="mx-auto select select-bordered w-full ">
                                    <option disabled selected>Skills</option>
                                    <option>YOGA</option>
                                    <option>CARDIO BURN</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Avaiable Day</span>
                                </label>
                                <select name="day" className="select select-bordered w-full ">
                                    <option>Saturday</option>
                                    <option>Sunday</option>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                    <option>wednesday</option>
                                    <option>Thursday</option>
                                    <option>Friday</option>
                                </select>
                            </div>

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <input name="time" type="time" placeholder="Available Time" className="input input-bordered" required />
                            </div>

                            <div className="form-control  mt-6">
                                <input type="submit" className="btn w-3/5 mx-auto bg-[#D2B48C]" value="Apply Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeTrainer;