import { async } from "@firebase/util"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../Auth/routes/AuthRoutes"
import { FirebaseAuth } from "../firebase/config"
import { NotasRoutes } from "../Notas/routes/NotasRoutes"
import { login, logout } from "../store/auth"
import { startLoadingNotas } from "../store/notas/thunks"
import { CheckingAuth } from "../ui/"

export const AppRouter = () => {

  const { status } = useSelector ( state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, async ( user ) =>{
      if( !user ) return dispatch ( logout() );
      const { uid, email, displayName, photoURL} = user;
      dispatch( login({ uid, email, displayName, photoURL }));
      dispatch( startLoadingNotas());
    })
  
  }, [])
  


  if( status === 'checking'){
    return <CheckingAuth/>
  }

  return (
    <Routes>

      {
        (status ==='authenticated')
        ?<Route path="./*" element={ <NotasRoutes />}/>
        :<Route path="./auth/*" element={ <AuthRoutes />}/>
      }
      <Route path='./*' element = {<Navigate to='/auth/login' />}/>
    </Routes>
  )
}
