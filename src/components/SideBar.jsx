import { MdDashboard } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { MdHelpOutline } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
    return (
        <>
            <div className="w-[20%] h-screen fixed bg-white text-black p-5">
                <p className="text-xl font-semibold mb-6">Your Finance Buddy</p>

                <ul className="space-y-4">
                    <li><Link to="/dashboard">
                        <MdDashboard />
                        <span>Dashboard</span>
                    </Link></li>
                    <li><Link to="/transaction-list">
                        <span>Transactions</span>
                        <FaListUl />
                    </Link></li>
                    <li><Link to="/categories">
                        <span>Categories</span>
                        <CgMenuGridR />
                    </Link></li>
                    <li><Link to="" ><span>Budget</span> </Link></li>

                </ul>

                <ul className="space-y-6">
                    <li><Link to="" >
                        <span>Help</span>
                        <MdHelpOutline />
                    </Link></li>
                    <li><Link to="/login" >
                        <span>Logout</span>
                        <FiLogOut />
                    </Link></li>

                </ul>
            </div>
        </>
    )
}