import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../Auth/routes/AuthRoutes"
import { NotasRoutes } from "../Notas/routes/NotasRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"

export const AppRouter = () => {

  const {} = useSelector ( state => state.auth);
  if( state === 'checking'){
    return <CheckingAuth/>
  }

  return (
    <Routes>

        <Route path="/auth/*" element={ <AuthRoutes />}/>

        <Route path="/*" element={ <NotasRoutes />}/>
    </Routes>
  )
}
