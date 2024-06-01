import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Share/Navbar/Navbar";
import Footer from "../Pages/Share/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <div className="max-w-[90%] mx-auto">
                <Navbar></Navbar>
                <div className="min-h-[calc(100vh-550px)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;