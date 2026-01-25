export default function AddIncomeModal({ onClose }) {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            {/* Modal container */}
            <div className="bg-white w-[40%] h-[70vh] rounded-xl p-6 shadow-lg">

                {/* Title */}
                <h2 className="text-xl font-bold text-black mb-6">
                    Add Income
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

                    {/* Source */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-black">
                            Source
                        </label>
                        <select
                            className="border border-black/30 rounded-md px-3 py-2 "
                        >
                            <option value="">Select source</option>
                            <option value="salary">Salary / Wages</option>
                            <option value="business">Business Income</option>
                            <option value="freelance">Freelance / Contract</option>
                            <option value="investment">Investments</option>
                            <option value="gift">Gift / Allowance</option>
                            <option value="refund">Refund / Reimbursement</option>
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
                            className="border border-black/30 rounded-md px-3 py-2 " />
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
                            Add Income
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}