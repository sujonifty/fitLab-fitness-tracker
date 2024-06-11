import { Badge, Button, Card, Modal, Table } from "flowbite-react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEye } from "react-icons/fa";
import { useState } from "react";


const Activity = () => {
    const [openModal, setOpenModal] = useState(false)
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/activity');
            return res.data;
        }
    })
    // console.log(users)
    return (
        <div>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell></Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Roll</Table.HeadCell>
                        <Table.HeadCell>Feedback</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            users.map((person, index) => <Table.Row key={person._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell>{person?.name}</Table.Cell>
                                <Table.Cell>{person?.email}</Table.Cell>
                                <Table.Cell><Badge className="w-16 p-2 font-semibold" color={person?.status==="rejected"? 'failure':'info'}>
                                    {person?.status}
                                </Badge></Table.Cell>
                                <Table.Cell>

                                    {
                                        person?.feedback ? <>
                                            <Button onClick={() => setOpenModal(true)}><FaEye ></FaEye></Button>
                                            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                                                <Modal.Header />
                                                <Modal.Body>
                                                    <Card>
                                                        <p>{person?.feedback}</p>
                                                    </Card>

                                                </Modal.Body>
                                            </Modal>
                                        </>
                                            : <Badge className="w-12 p-2 font-semibold" color='failure'>None</Badge>
                                    }

                                </Table.Cell>
                            </Table.Row>)
                        }

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default Activity;