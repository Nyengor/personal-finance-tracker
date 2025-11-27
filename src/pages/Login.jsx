import Loginpic from "../images/Loginpic.jpg"


export default function Login() {
    return (
        <>
            <div className="bg-pink-200 h-screen flex justify-center items-center">
                <div className="w-[70%] m-auto h-[70vh] flex bg-white rounded-2xl">
                    {/* Right side */}
                    <div className="w-1/2 h-full ">
                        <div className="p-12 flex flex-col">
                            <p className="text-black font-semibold text-3xl ">Welcome Back</p>
                            <p className="text-sm">Don't have an account?<a href="sign-up" className="font-semibold">Sign Up</a></p>
                        </div>

                        <form action="" method="post" className="">

                            <div className="flex flex-col pb-6 px-12 ">
                                <label htmlFor="" className="font-semibold">Email</label>
                                <input type="email" name="email" className="border rounded-lg" />
                            </div>

                            <div className="flex flex-col pb-6 px-12">
                                <label htmlFor="" className="font-semibold">Password</label>
                                <input type="password" name="password" className="border rounded-lg" />
                            </div>
                            <div className="flex justify-center mx-12 ">
                            <button type="submit" className="p-2 rounded-2xl w-full text-white bg-black text-xl ">Login</button>
                            </div>
                        </form>
                    </div>
                    
                    {/* Left Side */}
                    <div className=" w-1/2 h-full flex justify-center items-center">
                        <img src={Loginpic}  alt="SLogin pic" className="w-[97%] h-[68vh]  rounded-2xl " />
                    </div>
                </div>

            </div>
        </>
    )
}