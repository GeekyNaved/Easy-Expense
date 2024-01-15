import { useState } from "react"
import InputField from "../../components/InputField"
import CustButton from "../../components/CustButton";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="px-4 md:max-w-xl mx-auto">
            <p className="py-20 text-center text-5xl text-gray-900">
                Sign Up
            </p>
            <button onClick={() => alert('SignUp with google')} className="flex justify-center gap-3 items-center rounded-xl py-4 border-2 min-w-full">
                <FcGoogle className="text-3xl" />
                <p className="font-bold text-lg">Sign Up with Google</p>
            </button>
            <div className="flex justify-center items-center gap-2 py-4">
                <p className="border-b-2 w-full"></p>
                <p className="">OR</p>
                <p className="border-b-2 w-full"></p>
            </div>
            <div className="flex flex-col gap-6 item-center justify-center my-2">
                <InputField type="text" placeholder="Name" handleToggle={null} />
                <InputField type="email" placeholder="Email" handleToggle={null} />
                <InputField type={showPassword ? "text" : "password"} placeholder="Password" handleToggle={() => setShowPassword(!showPassword)} />
                <CustButton className="mt-4 mx-10" title="SignUp" handleClick={() => alert('login')} />
                <a href="#" className="text-center text-sm font-bold text-blue-600 hover:underline underline-offset-4">
                    Forget Password ?
                </a>
                <p className="text-center text-gray-500">Already have an account?{" "}
                    <a onClick={() => navigate('/login')} className="text-center text-sm text-blue-600 font-bold underline underline-offset-4">
                        Login</a>
                </p>
            </div>
        </div>
    )
}

export default SignUp