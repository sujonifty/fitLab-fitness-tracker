
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import { Table } from "flowbite-react";
import Swal from "sweetalert2";



const AllTrainer = () => {
    const axiosSecure = useAxiosSecure();
    const { data: trainers = [], refetch } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allTrainer');
            return res.data;
        }
    })
    // console.log(trainers)
    const handleTrainer = (trainer) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/removeTrainer/${trainer._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${trainer.name} is removed!`,
                                showConfirmButton: false,
                                timer: 2500
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="text-center my-4">
                <h2 className="text-3xl">Total trainers: {trainers.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell></Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Roll</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            trainers.map((trainer, index) => <Table.Row key={trainer._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell>{trainer?.name}</Table.Cell>
                                <Table.Cell>{trainer?.email}</Table.Cell>
                                <Table.Cell>{trainer?.roll}</Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => handleTrainer(trainer)}>
                                        <FaTrash className="text-2xl text-red-600"></FaTrash>
                                    </button>
                                </Table.Cell>
                            </Table.Row>)
                        }

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default AllTrainer;

