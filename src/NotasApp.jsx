import {  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem} from 'mdb-react-ui-kit';
import { AppRouter } from "./Router/AppRouter"
export const NotasApp = () => {
  return (
    <>
      {/* navbar */}
      <header className="header">
        <nav>
            <ul className="navlinks">
            <li className='navli'><a href="" className='alink'>Notas</a></li>
            <li className='navli'><a href="" className='alink'>Cuenta</a></li>
            <li className='navlibutton'>
              <MDBDropdown>
                <MDBDropdownToggle  tag='a' className='libutton'>
                 <img className='imguser' src="/img/user_circle_icon.png" alt="user_icon" /> 
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href='/auth/register' link>Registro</MDBDropdownItem>
                  <MDBDropdownItem href='/auth/login' link>login</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </li>
            </ul>          
        </nav>
      </header>
      
      
      <AppRouter/>
    </>
  )
}
