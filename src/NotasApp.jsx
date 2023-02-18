
import { Navbar } from "./Notas/pages/components"
import { AppRouter } from "./Router/AppRouter"
import {Footerpag} from "./ui/components/Footerpag"

export const NotasApp = () => {  
  return (
    <>      
      {/* navbar y parte superior */}
      <Navbar/>

      {/* aplicacion */}
      <AppRouter/>

      {/* footer de la pagina */}
      <Footerpag/>
      
    </>
  )
}
