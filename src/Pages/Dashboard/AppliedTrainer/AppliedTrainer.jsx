
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { Button, Label, Modal, Table, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const AppliedTrainer = () => {

    const [openModal, setOpenModal] = useState(false);
    const [open, setOpen] = useState(false);
    const axiosSecure = useAxiosSecure();
    const { data: applicants = [], refetch } = useQuery({
        queryKey: ['applicants'],
        queryFn: async () => {
            const res = await axiosSecure.get('/appliedTrainer');
            return res.data;
        }
    })
    console.log(applicants);
    const handleConfirm = (id) => {
        // e.preventDefault();
        const status = 'Confirm';
        const role = 'Trainer';
        const updatedInfo = { status, role };
        axiosSecure.put(`/confirm/${id}`, updatedInfo)
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
    const handleReject = (e, id) => {
        console.log(e)
        e.preventDefault();
        const status = 'rejected';
        const role = 'Member';
        const feedback = e.target.feedback.value;
        const rejectedInfo = { status, role, feedback };
        console.log(rejectedInfo)
        axiosSecure.put(`/reject/${id}`, rejectedInfo)
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
            {/* <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    
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
                                                                <input readOnly defaultValue={applicant.name} name="name" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
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
                                                                <input readOnly defaultValue={applicant.skill} name="skill" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                                            </div>

                                                        </div>

                                                        <div className=" flex justify-evenly items-center">

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
                                <td>
                                    <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
                                    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                                        <Modal.Header />
                                        <Modal.Body>
                                            <div className="text-center">
                                                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                    Are you sure you want to delete this product?
                                                </h3>
                                                <div className="flex justify-center gap-4">
                                                    <Button color="failure" onClick={() => setOpenModal(false)}>
                                                        {"Yes, I'm sure"}
                                                    </Button>
                                                    <Button color="gray" onClick={() => setOpenModal(false)}>
                                                        No, cancel
                                                    </Button>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </td>
                                <td>
                                    <label htmlFor="my_modal_7" className="btn text-red-600">Reject</label>
                        
                                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box">
                                            <section className="py-4">
                                                <div className="max-w-4xl p-6 mx-auto bg-base-100 rounded-md shadow-md dark:bg-gray-800">
                                                    <h2 className="text-lg text-center my-4 font-semibold text-base-content capitalize dark:text-white">Applicant Information</h2>
                                                    <div className="flex justify-center">
                                                        <img src={applicant.photo} className="w-1/2 rounded-xl mask mask-decagon" alt="" />
                                                    </div>
                                                    <form onSubmit={() => handleConfirm(e,applicant._id)}>
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
                                                            
                                                        </div>
                                                    </form>

                                                </div>
                                            </section>
                                        </div>
                                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                                    </div>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div> */}
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Applicant</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            applicants.map((applicant) => <Table.Row key={applicant.index} className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                <Table.Cell>{applicant?.name}</Table.Cell>
                                <Table.Cell>{applicant?.email}</Table.Cell>
                                <Table.Cell>{applicant?.status}</Table.Cell>

                                {
                                    <Table.Cell>
                                        <Button onClick={() => handleConfirm(applicant?._id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            accept
                                        </Button>
                                        {/* <Button onClick={() => setOpen(true)}><FaEye></FaEye></Button>
                                        <Modal show={openModal} size="md" onClose={() => setOpen(false)} popup>
                                            <Modal.Header />
                                            <Modal.Body>
                                                <form  className="flex max-w-md flex-col gap-4">
                                                    <div>
                                                        <div className="mb-2 block">
                                                            <Label htmlFor="email1" value="Applicant Name" />
                                                        </div>
                                                        <TextInput readOnly defaultValue={applicant.name} name="name" type="text" />
                                                    </div>
                                                    <div>
                                                        <div className="mb-2 block">
                                                            <Label htmlFor="email1" value="Applicant Email" />
                                                        </div>
                                                        <TextInput readOnly defaultValue={applicant.email} name="email" type="email" />
                                                    </div>
                                                    <div>
                                                        <div className="mb-2 block">
                                                            <Label htmlFor="email1" value="Applicant Age" />
                                                        </div>
                                                        <TextInput readOnly defaultValue={applicant.age} name="age" type="text" />
                                                    </div>

                                                    <Button onClick={() => handleConfirm(applicant?._id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                        accept
                                                    </Button>
                                                </form>
                                            </Modal.Body>
                                        </Modal> */}
                                    </Table.Cell>
                                }

                                <Table.Cell>
                                    <Button onClick={() => setOpenModal(true)}>Reject</Button>
                                    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>


                                        <Modal.Body>
                                            <form onSubmit={(e) => handleReject(e, applicant._id)} className="flex max-w-md flex-col gap-4">
                                                <div>
                                                    <div className="mb-2 block">
                                                        <Label htmlFor="email1" value="Applicant Name" />
                                                    </div>
                                                    <TextInput readOnly defaultValue={applicant.name} name="name" type="text" />
                                                </div>
                                                <div>
                                                    <div className="mb-2 block">
                                                        <Label htmlFor="email1" value="Applicant Email" />
                                                    </div>
                                                    <TextInput readOnly defaultValue={applicant.email} name="email" type="email" />
                                                </div>
                                                <div>
                                                    <div className="mb-2 block">
                                                        <Label htmlFor="email1" value="Applicant Age" />
                                                    </div>
                                                    <TextInput readOnly defaultValue={applicant.age} name="age" type="text" />
                                                </div>
                                                <div>
                                                    <div className="mb-2 block">
                                                        <Label value="Applicant Skill" />
                                                    </div>
                                                    <TextInput placeholder="Give your feedback" name="feedback" type="text" />
                                                </div>

                                                <Button type="submit" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Reject
                                                </Button>
                                            </form>
                                        </Modal.Body>
                                    </Modal>

                                </Table.Cell>

                            </Table.Row>)
                        }


                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default AppliedTrainer;


{/* <div className="overflow-x-auto"
>
    <Table hoverable>
        <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
                <span className="sr-only">Edit</span>
            </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
            {
                applicants.map((applicant, index) => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {'Apple MacBook Pro 17"'}
                    </Table.Cell>
                    <Table.Cell>{applicant?.name}</Table.Cell>
                    <Table.Cell>{applicant?.email}</Table.Cell>
                    <Table.Cell>{applicant?.status}</Table.Cell>
                    <Table.Cell>
                        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                            Reject
                        </a>
                    </Table.Cell>
                    <Table.Cell>
                        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                            accept
                        </a>
                    </Table.Cell>
                </Table.Row>)
            }


        </Table.Body>
    </Table>
</div> */}
