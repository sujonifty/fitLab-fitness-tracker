import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ManageSlot = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const [day,setDay]=useState([])
    const { data: slots = [], refetch } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/manageSlot/?trainer=${user?.email}`);
            return res.data;
        }
    })

    const handleDeleteUser = (slot) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/slot/${slot._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `Your ${slot.slotName} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    console.log(slots)
    // console.log(day)
    // useEffect(() => {
    //     const all=slots[0]
    //     console.log(all)
    //     const {selectDays}=all
    //     console.log(selectDays)
    //     const allDays = selectDays.map(slot => slot.value);
    //     setDay(allDays);
    // }, [])
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
                            <Table.Cell>{slot.slotName}</Table.Cell>
                            <Table.Cell>{slot.email}</Table.Cell>
                            <Table.Cell>{slot.slotTime}</Table.Cell>
                            <Table.Cell>
                            
                            </Table.Cell>
                            <Table.Cell>
                                <button onClick={() => handleDeleteUser(slot)}>
                                    <FaTrash className="text-red-600 text-xl"></FaTrash>
                                </button>
                            </Table.Cell>
                        </Table.Row>)
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default ManageSlot;