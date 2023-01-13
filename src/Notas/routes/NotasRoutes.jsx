import { Navigate, Route, Routes } from "react-router-dom"
import { NotasPage } from "../pages/NotasPage"

export const NotasRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = {<NotasPage />} />

        <Route path="/*" element = {<Navigate to="/" /> } />
    </Routes>
  )
}
