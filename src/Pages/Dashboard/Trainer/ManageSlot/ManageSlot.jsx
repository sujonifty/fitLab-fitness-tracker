import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const ManageSlot = () => {
    const {user}=useContext(AuthContext)
const axiosSecure =useAxiosSecure();
    const { data: slots = [] } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/manageSlot/${user?.email}`);
            return res.data;
        }
    })
    
    return (
        <div className="overflow-x-auto">
        <Table>
            <Table.Head>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>status</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    slots.map(slot => <Table.Row key={slot._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>{slot.name}</Table.Cell>
                        <Table.Cell>{slot.email}</Table.Cell>
                        <Table.Cell>{slot.roll}</Table.Cell>
                        <Table.Cell><FaTrash className="text-red-600 text-xl"></FaTrash></Table.Cell>
                    </Table.Row>)
                }
            </Table.Body>
        </Table>
    </div>
    );
};

export default ManageSlot;