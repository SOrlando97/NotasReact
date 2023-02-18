import { Navigate, Route, Routes } from "react-router-dom"
import { ForgotPassword, LoginPage, RegisterPage } from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path ="login" element = {<LoginPage />}/>
        <Route path ="register" element = {<RegisterPage />}/>
        <Route path ="forgotpass" element = {<ForgotPassword />}/>
        <Route path ="/*" element = {<Navigate to="./auth/login" />}/>
    </Routes>

  )
}
