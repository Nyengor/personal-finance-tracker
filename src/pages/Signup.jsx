export default function Signup() {
    return (
        <>
            <div className="bg-blue-100 h-screen flex justify-center items-center">
                <div className="w-[70%] m-auto h-[70vh] flex">
                    <div className="bg-white w-1/2 h-full ">
                        <div className="p-5 flex flex-col justify-center items-center">
                            <p className="text-black font-bold text-2xl ">Create Account</p>
                            <p>Join and Secure your Money</p>
                        </div>

                        <form action="" method="post" className="flex flex-col">
                            <div className="flex flex-col pb-6 px-6">
                                <label htmlFor="" className="font-semibold">Name</label>
                                <input type="text" className="border rounded-lg" />
                            </div>

                            <div className="flex flex-col pb-6 px-6 ">
                                <label htmlFor="" className="font-semibold">Email</label>
                                <input type="email" name="email" className="border rounded-lg" />
                            </div>

                            <div className="flex flex-col pb-6 px-6">
                                <label htmlFor="" className="font-semibold">Password</label>
                                <input type="password" name="password" className="border rounded-lg" />
                            </div>

                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                    <div className=" w-1/2 h-full">
                      <img src="" alt="" srcset="" />
                    </div>
                </div>

            </div>
        </>
    )
}