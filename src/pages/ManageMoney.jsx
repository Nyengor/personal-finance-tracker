import expenses from "../data/expensedata"
import PieChartComponent from "../components/PieChart"

export default function ManageMoney() {
    return (
        <>

            <div className="flex flex-col justify-center items-center  ">
                <p className="font-bold text-3xl">Manage Your Money </p>
                <h3>Ensure the your spending is within your budget</h3>
            </div>

            <button type="submit" className="p-4 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mb-2 m-4">Add </button>

            <div className="m-4 flex flex-row gap-6">
                {/* EXPENSE TABLE  */}
                <table className="w-[60%]">
                    <thead>
                        <tr className="bg-gray-800 text-white ">
                            <th className="">EXPENSE ID</th>
                            <th className="py-2 ">CATEGORY</th>
                            <th className="py-2 ">AMOUNT</th>
                            <th className="py-2 ">DATE</th>
                            <th className="py-2 ">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense) => (
                            <tr key={expense.id} className="border-b">
                                <td className="py-2 px-2">{expense.id}</td>
                                <td>{expense.category}</td>
                                <td>{expense.amount}</td>
                                <td>{expense.date}</td>
                                <td>
                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-3 rounded mr-2">Edit</button>
                                    <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-1 px-3 rounded"> Delete</button>
                                </td>
                            </tr>
                        ))}<br />
                    </tbody>
                </table>
                
                {/* Income */}
                <div className="w-[35%] ">
                    <div className="bg-violet-600 h-[30vh] rounded-lg p-4 text-white flex flex-col justify-center items-center">
                        <p>Total Income: $5000</p>
                         
                         <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Add Income</button>
                         <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Edit Income</button>

                    </div>

                    <div>
                        <PieChartComponent />
                    </div>

                </div>
            </div>
        </>
    )
}