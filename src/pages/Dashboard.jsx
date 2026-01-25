import ProgressBar from "../components/ProgressBar"
import Addincome from "../images/addincome.jpg"
import Addexpense from "../images/addexpenses.jpg"
import { LuCircleArrowOutUpRight } from "react-icons/lu"; 
import AddIncomeModal from "../components/AddIncomeModal";
import AddExpenseModal from "../components/AddExpenseModal";
import { useState } from "react";
import Sidebar from "../components/SideBar";


export default function Dashboard() {
       const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
       const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);


    return (
        <>
        <Sidebar />
            <div className="flex flex-col w-[80%] ml-[20%] p-8 bg-gray-50 min-h-screen">
                {/* GRID*/}
                <div className="grid grid-cols-3 gap-6">

                    <div className="h-[30vh] rounded-2xl bg-pink-100 p-6 shadow-md flex flex-col justify-between">
                        <div>
                            <p className="text-lg font-semibold text-pink-700">Total Income</p>
                            <p className="text-sm text-pink-600 mt-1">
                                How much money you accumulated in a month
                            </p>
                        </div>
                        <p className="text-2xl font-bold text-pink-800">$2,340.00</p>
                    </div>

                    <div className="h-[30vh] rounded-2xl bg-purple-100 p-6 shadow-md flex flex-col justify-between">
                        <div>
                            <p className="text-lg font-semibold text-purple-700">Total Expenses</p>
                            <p className="text-sm text-purple-600 mt-1">
                                Money spent this month
                            </p>
                        </div>
                        <p className="text-2xl font-bold text-purple-800">$1,120.00</p>
                    </div>

                    <div className="h-[30vh] rounded-2xl bg-blue-100 p-6 shadow-md flex flex-col justify-between">
                        <div>
                            <p className="text-lg font-semibold text-blue-700">Current Balance</p>
                            <p className="text-sm text-blue-600 mt-1">
                                Amount saved so far
                            </p>
                        </div>
                        <p className="text-2xl font-bold text-blue-800">$1,220.00</p>
                    </div>

                </div>

                <div className="flex flex-row gap-12 mt-8 ">
                    {/* CATEGORIES */}
                    <div className=" w-[68%] p-4 rounded-2xl bg-white shadow-md">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
                        <div className="space-y-4">
                            <ProgressBar label="Food" percentage={60} color="bg-green-500" />
                            <ProgressBar label="Transportation" percentage={30} color="bg-blue-500" />
                            <ProgressBar label="Entertainment" percentage={10} color="bg-purple-500" />
                            <ProgressBar label="Utilities" percentage={50} color="bg-yellow-500" />
                            <ProgressBar label="Healthcare" percentage={20} color="bg-red-500" />
                            <ProgressBar label="Others" percentage={40} color="bg-gray-500" />
                        </div>
                    </div>

                    {/* ADD INCOME/ESPENSES */}
                    <div className="flex flex-col w-[33%]" >
                        <div className="relative w-full h-50 rounded-xl mb-6 overflow-hidden cursor-pointer">
                            <img
                                src={Addincome}
                                alt="Add Income"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                            <button onClick ={() => setOpenAddIncomeModal(true)}>
                                <LuCircleArrowOutUpRight className="text-3xl font-bold mb-2" />
                                <span className="font-bold text-lg">ADD INCOME</span> </button>
                            </div>
                            {openAddIncomeModal && <AddIncomeModal onClose={() => setOpenAddIncomeModal(false)} />}
                        </div>


                        {/* Add Expenses */}
                        <div className="relative w-full h-50 rounded-xl overflow-hidden cursor-pointer">
                            
                            <img
                                src={Addexpense}
                                alt="Add Expense"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                            <button onClick={() => setOpenAddExpenseModal(true)}>
                                <LuCircleArrowOutUpRight className="text-3xl font-bold mb-2" />
                                <span className="font-bold text-lg">ADD EXPENSE</span>
                             </button>
                            </div>
                            
                           
                            {openAddExpenseModal && <AddExpenseModal onClose={() => setOpenAddExpenseModal(false)} />}
                        </div>

                
                    </div>

                </div>
            </div>
        </>
    )
}