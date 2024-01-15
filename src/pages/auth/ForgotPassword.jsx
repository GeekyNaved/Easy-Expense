import { useState } from "react"
import InputField from "../../components/InputField"
import CustButton from "../../components/CustButton";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <div className="px-4 md:max-w-xl mx-auto">
            <p className="py-20 text-center text-5xl text-gray-900">
                Forgot Password
            </p>
            <p className="text-2xl font-bold">
                Don't worry. Enter your email and we'll send you a link to reset your password.
            </p>
            <div className="flex flex-col my-8">
                <InputField type="email" placeholder="Email" handleToggle={null} />
                <CustButton className="mt-8" title="Continue" handleClick={() => navigate("/email-sent")} />
                <a onClick={() => navigate('/login')} className="cursor-pointer my-4 self-center text-sm text-blue-600 font-bold underline underline-offset-4">
                    Back to Login</a>
            </div>
        </div>
    )
}

export default ForgotPassword;