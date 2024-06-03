
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";


const AppliedTrainer = () => {
    const axiosSecure = useAxiosSecure();
    const { data: applicants = [], refetch } = useQuery({
        queryKey: ['applicants'],
        queryFn: async () => {
            const res = await axiosSecure.get('/appliedTrainer');
            return res.data;
        }
    })
    const handleConfirm = (id) => {
        // e.preventDefault();
        const status = 'Confirm';
        const roll = 'Trainer';
        const updatedInfo ={status,roll};
        axiosSecure.put(`/confirm/${id}`,updatedInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Confirmed as Trainer.',
                        icon: 'success',
                        timer: 2500
                    })
                    refetch();
                }
            })
    }
    const handleReject = (e,id) => {
        console.log(e)
        e.preventDefault();
        const status = 'rejected';
        const roll = 'Member';
        const feedback = e.target.feedback.value;
        const rejectedInfo ={status,roll,feedback};
        console.log(rejectedInfo)
        axiosSecure.put(`/reject/${id}`,rejectedInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Rejected as Trainer.',
                        icon: 'success',
                        timer: 2500
                    })
                    // refetch();
                }
            })
    }
    return (
        <div>
            <div className="text-center my-4">
                <h2 className="text-3xl">Total Applicants: {applicants.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applicants.map((applicant, index) => <tr key={applicant._id}>
                                <th>{index + 1}</th>
                                <td>{applicant?.name}</td>
                                <td>{applicant?.email}</td>
                                <td>{applicant?.status}</td>

                                <td>
                                    <label htmlFor="my_modal_7" className="btn text-red-600"><FaEye></FaEye></label>
                        
                                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box">
                                            <section className="py-4">
                                                <div className="max-w-4xl p-6 mx-auto bg-base-100 rounded-md shadow-md dark:bg-gray-800">
                                                    <h2 className="text-lg text-center my-4 font-semibold text-base-content capitalize dark:text-white">Applicant Information</h2>
                                                    <div className="flex justify-center">
                                                        <img src={applicant.photo} className="w-1/2 rounded-xl mask mask-decagon" alt="" />
                                                    </div>
                                                    <div>
                                                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                                            <div>
                                                                <label className="text-base-content " >Name</label>
                                                                <input name="pdf" readOnly defaultValue={applicant.name} type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            </div>

                                                            <div>
                                                                <label className="text-base-content " >Email</label>
                                                                <input readOnly defaultValue={applicant.email} name="email" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            </div>
                                                            <div>
                                                                <label className="text-base-content " >Age</label>
                                                                <input readOnly defaultValue={applicant.age} name="age" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            </div>
                                                            <div>
                                                                <label className="text-base-content " >Skill</label>
                                                                <input readOnly defaultValue={applicant.skill} name="age" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            </div>

                                                        </div>
                                                        <div>
                                                            <label className="text-base-content " >Feedback</label>
                                                            <input id="feedback" required name="feedback" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                        </div>

                                                        <div className=" flex justify-evenly items-center">
                                                            <div className="flex justify-center mt-6">
                                                                <input type="button" onClick={() => handleReject(applicant._id)} value="Reject" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                                                            </div>
                                                            <div className="flex justify-center mt-6">
                                                                <input type="button" onClick={() => handleConfirm(applicant._id)} value="Confirm" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </section>
                                        </div>
                                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                                    </div>
                                </td>
                                {/* <td>
                                    <label htmlFor="my_modal_7" className="btn text-red-600"><FaEye></FaEye></label>
                        
                                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box">
                                            <section className="py-4">
                                                <div className="max-w-4xl p-6 mx-auto bg-base-100 rounded-md shadow-md dark:bg-gray-800">
                                                    <h2 className="text-lg text-center my-4 font-semibold text-base-content capitalize dark:text-white">Applicant Information</h2>
                                                    <div className="flex justify-center">
                                                        <img src={applicant.photo} className="w-1/2 rounded-xl mask mask-decagon" alt="" />
                                                    </div>
                                                    <form onSubmit={() => handleConfirm(applicant._id)}>
                                                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                                            <div>
                                                                <label className="text-base-content " >Name</label>
                                                                <input name="pdf" readOnly defaultValue={applicant.name} type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            </div>

                                                            <div>
                                                                <label className="text-base-content " >Email</label>
                                                                <input readOnly defaultValue={applicant.email} name="email" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            </div>
                                                            <div>
                                                                <label className="text-base-content " >Age</label>
                                                                <input readOnly defaultValue={applicant.age} name="age" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            </div>
                                                            <div>
                                                                <label className="text-base-content " >Skill</label>
                                                                <input readOnly defaultValue={applicant.skill} name="age" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            </div>

                                                        </div>
                                                        <div>
                                                            <label className="text-base-content " >Feedback</label>
                                                            <input id="feedback" required name="feedback" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                        </div>

                                                        <div className=" flex justify-evenly items-center">
                                                            <div className="flex justify-center mt-6">
                                                                <input type="submit" value="Reject" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                                                            </div>
                                                            <div className="flex justify-center mt-6">
                                                                <input type="submit" value="Confirm" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                                                            </div>
                                                        </div>
                                                    </form>

                                                </div>
                                            </section>
                                        </div>
                                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                                    </div>
                                </td> */}
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedTrainer;

