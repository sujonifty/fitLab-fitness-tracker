import { FaAd, FaHome, FaMoneyBill, FaUsers} from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SiManageiq } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    // const isAdmin = true;
    const isAdmin = false;
    return (
        <div className="flex">
            {/* dashboard side-bar */}
            <div className="w-64 min-h-screen bg-[#D2B48C]">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
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
                                    Applied Trainer:</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allTrainer">
                                    <FaUsers></FaUsers>
                                    All Trainers</NavLink>
                            </li>
                        </>
                            :
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
                            </>
                    }
                    {/* shared nav */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addForum">
                            <FaAd></FaAd>
                            Add new Forum
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;