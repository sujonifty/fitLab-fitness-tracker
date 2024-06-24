import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import { Helmet } from "react-helmet-async";


const Balance = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    console.log(payments)
    return (
        <div>
            <Helmet><title>fitLab | Balance</title></Helmet>

            <h2 className="text3-xl">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <Table className="table table-zebra">
                    {/* head */}
                    <Table.Head>
                            <Table.HeadCell>#</Table.HeadCell>
                            <Table.HeadCell>price</Table.HeadCell>
                            <Table.HeadCell>Transaction Id</Table.HeadCell>
                            <Table.HeadCell>Status</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        {payments.map((payment, index) => <Table.Row key={payment._id}>
                            <Table.Cell>{index + 1}</Table.Cell>
                            <Table.Cell>${payment.price}</Table.Cell>
                            <Table.Cell>{payment.transactionId}</Table.Cell>
                            <Table.Cell>{payment.status}</Table.Cell>
                        </Table.Row>)}
                        
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default Balance;