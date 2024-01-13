import { Route, Routes } from "react-router-dom"
import Login from "../auth/login"
import Home from "../main/home"
import Welcome from "../auth/welcome"

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default MainRouter