import { MdDashboard } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { MdHelpOutline } from "react-icons/md";
import { FiLogOut } from "react-icons/fi"
import { Link } from "react-router";

export default function Sidebar() {
    return (
        <>
            <div className="w-[20%] h-screen fixed bg-white text-black p-6 shadow-lg flex flex-col justify-between">
                {/* Brand / Title */}
                <p className="text-2xl font-bold mb-8 text-gray-800">
                    Your Finance Buddy
                </p>

                {/* Main Navigation */}
                <ul className="flex flex-col gap-4">
                    <li>
                        <Link
                            to="/"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <MdDashboard className="text-xl text-gray-700" />
                            <span className="font-medium text-gray-800">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/manage-money"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <FaListUl className="text-xl text-gray-700" />
                            <span className="font-medium text-gray-800">Manage Money</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/categories"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <CgMenuGridR className="text-xl text-gray-700" />
                            <span className="font-medium text-gray-800">Categories</span>
                        </Link>
                    </li>
                </ul>

                {/* Secondary Navigation */}
                <ul className="flex flex-col gap-4 mt-10">
                    <li>
                        <Link
                            to=""
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <MdHelpOutline className="text-xl text-gray-700" />
                            <span className="font-medium text-gray-800">Help</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <FiLogOut className="text-xl text-gray-700" />
                            <span className="font-medium text-gray-800">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </>
    )
}