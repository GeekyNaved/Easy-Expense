import { useState } from "react"
import InputField from "../../components/InputField"
import CustButton from "../../components/CustButton";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="px-4">
            <p className="py-5 text-center text-3xl text-gray-900">
                Login
            </p>
            <div className="flex flex-col gap-6 item-center justify-center my-10">
                <InputField type="email" placeholder="Email" handleToggle={null} />
                <InputField type={showPassword ? "text" : "password"} placeholder="Password" handleToggle={() => setShowPassword(!showPassword)} />
                <a href="#" className="text-right text-sm text-blue-600 hover:underline underline-offset-4">
                    Forget Password ?
                </a>
                <CustButton title="Login" handleClick={() => alert('login')} />
            </div>
        </div>
    )
}

export default Login