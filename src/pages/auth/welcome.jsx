import { useNavigate } from "react-router-dom"

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-blue-700 flex flex-col items-center justify-center min-h-screen">
            <p className="py-5 text-5xl text-white">
                Easy Expense
            </p>
            <button className="my-5 px-10 py-3 bg-red-500 text-white rounded " onClick={() => navigate("/login")}>
                Get Started
            </button>
        </div>
    )
}

export default Welcome