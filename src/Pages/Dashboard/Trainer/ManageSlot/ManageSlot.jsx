import { Table } from "flowbite-react";
import { FaTrash } from "react-icons/fa";

const ManageSlot = () => {
    const demo =[ 
        {_id: '665f6eea97c90341625a2abd', name: 'MD. SUJON ALI', email: 'himonto22@gmail.com', roll: 'pending'},
        {_id: '665f6eea97c90341625a2as', name: 'MD. SUJON ALI', email: 'himon22@gmail.com', roll: 'pending'},
    ]
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
                    demo.map(sub => <Table.Row key={sub._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>{sub.name}</Table.Cell>
                        <Table.Cell>{sub.email}</Table.Cell>
                        <Table.Cell>{sub.roll}</Table.Cell>
                        <Table.Cell><FaTrash className="text-red-600 text-xl"></FaTrash></Table.Cell>
                    </Table.Row>)
                }
            </Table.Body>
        </Table>
    </div>
    );
};

export default ManageSlot;