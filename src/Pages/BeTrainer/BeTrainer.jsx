import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import Select from 'react-select';


const BeTrainer = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [mySkill, setMySkill] = useState([]);
    const [availableDays, setAvailableDays] = useState([]);
    useEffect(() => {
        const allSkill = selectedSkills.map(skill => skill.value);
        setMySkill(allSkill);
    }, [selectedSkills])
    // useEffect(() => {
    //     const allDay = selectedDays.map(day => day.value);
    //     setAvailableDays(allDay);
    // }, [selectedDays])
    const handleBeTrainer = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const age = e.target.age.value;
        const time = e.target.time.value;
        const status = 'Pending';
        const applicantInfo = { name, email, photo, age, mySkill, selectedDays, time, status }
        console.log(applicantInfo)
        axiosPublic.post('/appliedTrainer', applicantInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Applied Successfully",
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
    const days = [

        { value: 'sat', label: 'Saturday' },
        { value: 'sun', label: 'Sunday' },
        { value: 'mon', label: 'Monday' },
        { value: 'tue', label: 'Tuesday' },
        { value: 'wed', label: 'Wednesday' },
        { value: 'thu', label: 'Thursday' },
        { value: 'fri', label: 'Friday' }
    ];


    const handleChange = (selectedOptions) => {
        setSelectedDays(selectedOptions);
    };
    const skills = [
        { value: 'Passionate', label: 'Passionate' },
        { value: 'Anatomy', label: 'Anatomy' },
        { value: 'Kinesiology', label: 'Kinesiology' },
        { value: 'Assessor', label: 'Assessor' },
        { value: 'Encourager', label: 'Encourager' },
        { value: 'Certified', label: 'Certified' },
    ];


    const handleSkill = (selectedOptions) => {
        setSelectedSkills(selectedOptions);
    };
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
                                <Select
                                    isMulti
                                    name="skill"
                                    options={skills}
                                    className="basic-multi-select rounded-xl"
                                    classNamePrefix="select"
                                    onChange={handleSkill}
                                    value={selectedSkills}
                                    placeholder="Select skills..."
                                />


                            </div>

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Available Day</span>
                                </label>
                                <Select
                                    isMulti
                                    name="day"
                                    options={days}
                                    className="basic-multi-select rounded-xl"
                                    classNamePrefix="select"
                                    onChange={handleChange}
                                    value={selectedDays}
                                    placeholder="Select available days..."
                                />
                            </div>
                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <input name="time" type="number" placeholder="Available Time Per Day" className="input input-bordered" required />
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