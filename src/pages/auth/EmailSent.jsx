import { useState } from "react"
import InputField from "../../components/InputField"
import CustButton from "../../components/CustButton";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import emailRecovery from "../../assets/emailRecovery.png"
const EmailSent = () => {
    const navigate = useNavigate();
    return (
        <div className="px-4 md:max-w-xl mx-auto">
            <img src={emailRecovery} />
            <p className="text-3xl font-bold py-5">
                Your email is on the way
            </p>
            <p className="text-lg">
                Check your email test@test.com and follow the instructions to reset your password
            </p>
            <CustButton className="my-8 min-w-full" title="Back to Login" handleClick={() => navigate("/login")} />
        </div>
    )
}

export default EmailSent;