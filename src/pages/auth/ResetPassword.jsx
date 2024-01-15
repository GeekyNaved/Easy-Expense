import InputField from "../../components/InputField"
import CustButton from "../../components/CustButton";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();
    return (
        <div className="px-4 md:max-w-xl mx-auto">
            <p className="py-20 text-center text-5xl text-gray-900">
                Reset Password
            </p>
            <div className="flex flex-col gap-6 item-center justify-center my-2">
                <InputField type="text" placeholder="New Password" handleToggle={null} />
                <InputField type="text" placeholder="Retype new password" handleToggle={null} />
                <CustButton className="mt-4 mx-10" title="Change Password" handleClick={() => navigate("/login")} />
            </div>
        </div>
    )
}

export default ResetPassword