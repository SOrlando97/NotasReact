import { AppRouter } from "./Router/AppRouter"
export const NotasApp = () => {
  return (
    <>
      {/* navbar */}
      <header className="header">
        <nav>
            <ul className="navlinks">
            <li><a href="">Notas</a></li>
            <li><a href="">Cuenta</a></li>
            </ul>          
        </nav>
      </header>
      
      
      <AppRouter/>
    </>
  )
}
