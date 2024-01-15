import { Route, Routes } from "react-router-dom"
import Login from "../auth/login"
import Home from "../main/home"
import Welcome from "../auth/Welcome"
import SignUp from "../auth/Signup"

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default MainRouter