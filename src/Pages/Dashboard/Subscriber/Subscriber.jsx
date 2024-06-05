import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Table } from "flowbite-react";
const Subscriber = () => {
    const axiosPublic = useAxiosPublic();
    const { data: Subscribers = [], refetch } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
            const res = await axiosPublic.get('/subscriber');
            return res.data;
        }
    })
    // console.log(Subscribers)
    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Roll</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        Subscribers.map(sub => <Table.Row key={sub._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>{sub.name}</Table.Cell>
                            <Table.Cell>{sub.email}</Table.Cell>
                            <Table.Cell>{sub.roll}</Table.Cell>
                        </Table.Row>)
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default Subscriber;