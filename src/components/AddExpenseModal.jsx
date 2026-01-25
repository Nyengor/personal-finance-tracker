export default function AddExpenseModal({ onClose }) {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            {/* Modal container */}
            <div className="bg-white w-[40%] h-[70vh] rounded-xl p-6 shadow-lg">

                {/* Title */}
                <h2 className="text-xl font-bold text-black mb-6">
                    Add Expense
                </h2>

                {/* Form */}
                <form className="flex flex-col gap-4">
                    {/* Amount */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-black">
                            Amount
                        </label>
                        <input
                            type="number"
                            placeholder="Enter amount"
                            className="border border-black/30 rounded-md px-3 py-2 "
                        />
                    </div>

                    {/* Category */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-black">
                            Category
                        </label>
                        <select
                            className="border border-black/30 rounded-md px-3 py-2 "
                        >
                            <option value="">Select category</option>
                            <option value="food">Food</option>
                            <option value="transportation">Transportation</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="utilities">Utilities</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Date */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-black">
                            Date
                        </label>
                        <input
                            type="date"
                            className="border border-black/30 rounded-md px-3 py-2 "/>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-12">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-md border border-black text-black hover:bg-black hover:text-white transition"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-4 py-2 rounded-md bg-black text-white hover:opacity-90 transition">
                         Add Expense
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}