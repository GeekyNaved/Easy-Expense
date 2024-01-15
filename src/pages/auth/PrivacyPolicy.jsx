import { useState } from "react"
import InputField from "../../components/InputField"
import CustButton from "../../components/CustButton";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
    const navigate = useNavigate();
    return (
        <div className="px-4 md:max-w-xl mx-auto">
            <p className="py-20 text-center text-5xl text-gray-900">
                Privacy Policy
            </p>
            <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde ducimus dolorum adipisci, laudantium ad rerum eaque numquam odio minus! Cupiditate minus facere assumenda magni, deleniti provident, quia earum quae officiis architecto eius culpa dolorem iure. Sint atque illo dolorem optio eligendi vitae et aperiam in reiciendis ipsum, repellendus eius?
            </p>
            <CustButton className="my-8 min-w-full" title="Back to Login" handleClick={() => navigate("/login")} />
        </div>
    )
}

export default PrivacyPolicy;