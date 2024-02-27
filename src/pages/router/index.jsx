import { Route, Routes } from "react-router-dom"
import Home from "../main/home"
import Welcome from "../auth/welcome"
import SignUp from "../auth/Signup"
import ForgotPassword from "../auth/ForgotPassword"
import EmailSent from "../auth/EmailSent"
import ResetPassword from "../auth/ResetPassword"
import Login from "../auth/login"
import TermsOfService from "../auth/TermsOfService"
import PrivacyPolicy from "../auth/PrivacyPolicy"
import Transactions from "../main/Trasactions"
import Add from "../main/Add"
import Categories from "../main/Categories"
import Settings from "../main/Settings"
const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/email-sent" element={<EmailSent />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/add" element={<Add />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}

export default MainRouter