import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../Auth/routes/AuthRoutes"
import { NotasRoutes } from "../Notas/routes/NotasRoutes"

export const AppRouter = () => {
  return (
    <Routes>

        <Route path="/auth/*" element={ <AuthRoutes />}/>

        <Route path="/*" element={ <NotasRoutes />}/>
    </Routes>
  )
}
