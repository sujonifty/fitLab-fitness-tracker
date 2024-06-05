
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";



const AllTrainer = () => {
    const axiosSecure = useAxiosSecure();
    const { data: trainers = [], refetch } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allTrainer');
            return res.data;
        }
    })
    console.log(trainers)
    return (
        <div>
            <div className="text-center my-4">
                <h2 className="text-3xl">Total trainers: {trainers.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trainers.map((trainer, index) => <tr key={trainer._id}>
                                <th>{index + 1}</th>
                                <td>{trainer?.name}</td>
                                <td>{trainer?.email}</td>
                                <td>{trainer?.roll}</td>
                                <td>
                                    <button ><FaTrash className="text-2xl text-red-600"></FaTrash></button>
                                </td>
                            
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTrainer;

{/* <Table>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Roll</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">                   
                        <Table.Cell>Sliver</Table.Cell>
                        <Table.Cell>Laptop</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table> */}