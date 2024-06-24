import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { FaAd, FaHome, FaMoneyBill, FaUsers } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdUnsubscribe } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { SiManageiq } from "react-icons/si";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    const { data: activeUser = {} } = useQuery({
        queryKey: ['activeUser'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/activeUser/?email=${user.email}`);
            return res.data;
        }
    })
    console.log(activeUser)
    console.log(activeUser.role)
    return (
        <div className="flex">
            {/* dashboard side-bar */}
            <div className="w-64 min-h-screen bg-[#D2B48C]">
                <ul className="menu p-4">
                    {activeUser.role === "admin" && (
                        <>
                            {/* <li>
                                    <NavLink to="/dashboard">
                                        <FaHome></FaHome>
                                        Admin Home
                                    </NavLink>
                                </li> */}
                            <li>
                                <NavLink to="/dashboard/subscriber">
                                    <MdUnsubscribe />
                                    Subscribers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addClass">
                                    <FaMoneyCheckDollar />
                                    Add new Class</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/balance">
                                    <FaMoneyBill></FaMoneyBill>
                                    Balance</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/appliedTrainer">
                                    <FaUsers></FaUsers>
                                    Applied Trainer</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allTrainer">
                                    <FaUsers></FaUsers>
                                    All Trainers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addForum">
                                    <FaAd></FaAd>
                                    Add new Forum
                                </NavLink>
                            </li>
                        </>
                    )}
                    {activeUser.role === "Trainer" && (
                        <>
                            <li>
                                <NavLink to="/dashboard/trainerHome">
                                    <FaHome></FaHome>
                                    Trainer Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageSlot">
                                    <SiManageiq />

                                    Manage Slots</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/addSlot">
                                    <FaAd></FaAd>
                                    Add New slot</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addForum">
                                    <FaAd></FaAd>
                                    Add new Forum
                                </NavLink>
                            </li>
                        </>
                    )}
                    {activeUser.role === "Member" && (
                        <>
                            <li>
                                <NavLink to="/dashboard/profile">
                                    <CgProfile />
                                    Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/activity">
                                    <RxActivityLog />
                                    Activity Log</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookedTrainer">
                                    <TbBrandBooking />
                                    Book Trainer</NavLink>
                            </li>
                        </>
                    )}
                    {/* shared nav */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;