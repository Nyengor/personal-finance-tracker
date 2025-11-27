import Signuppic from "../images/signuppic.jpg"


export default function Signup() {
    return (
        <>
            <div className=" bg-pink-200 h-screen flex justify-center items-center">
                <div className="w-[70%] m-auto h-[70vh] flex bg-white rounded-2xl">
                    {/* Right side */}
                    <div className=" w-1/2 h-full flex justify-center items-center">
                        <img src={Signuppic}  alt="Sign up pic" className="w-[97%] h-[68vh]  rounded-2xl " />
                    </div>

                    {/* Left side */}

                    <div className="w-1/2 h-full ">
                        <div className="p-5 flex flex-col">
                            <p className="text-black font-semibold text-3xl ">Create Account</p>
                            <p className="text-sm">Already have an account?<a href="login" className="font-semibold">Login</a></p>
                        </div>

                        <form action="" method="post" className="">
                            <div className="flex flex-row gap-6 pb-6 px-6 ">
                                <div className="flex flex-col flex-1">
                                    <label htmlFor="" className="font-semibold">First Name</label>
                                    <input type="text" className="border rounded-lg" />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <label htmlFor="" className="font-semibold"> Last Name</label>
                                    <input type="text" className="border rounded-lg" />

                                </div>
                            </div>


                            <div className="flex flex-col pb-6 px-6 ">
                                <label htmlFor="" className="font-semibold">Email</label>
                                <input type="email" name="email" className="border rounded-lg" />
                            </div>

                            <div className="flex flex-col pb-6 px-6">
                                <label htmlFor="" className="font-semibold">Password</label>
                                <input type="password" name="password" className="border rounded-lg" />
                            </div>
                            <div className="flex justify-center mx-6 ">
                            <button type="submit" className="p-2 rounded-2xl w-full text-white bg-black text-xl ">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    
                </div>

            </div>
        </>
    )
}