import {  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from "./Router/AppRouter"
import { startLogout } from './store/auth';
export const NotasApp = () => {
  const { status } = useSelector ( state => state.auth);
  let statusactual ='';
  (status === 'authenticated')? statusactual = 'autenticado': statusactual = '';
  const dispatch = useDispatch();
  const onLogout = () =>{
      dispatch( startLogout());
  }
  return (
    <>
      {/* navbar */}
      <header className="header">
        <nav>
            <ul className="navlinks">
            {statusactual && <li className='navli'><a href="" className='alink'>Notas</a></li>}
            {!statusactual && <li className='navli'><a href="" className='alink'>Inicio de Sesion</a></li>}
            {statusactual && 
              <li className='navlibutton'>
                <MDBDropdown>
                  <MDBDropdownToggle  tag='a' className='libutton'>
                  <img className='imguser' src="/img/user_circle_icon.png" alt="user_icon" /> 
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href='/auth/login' link>Cuenta</MDBDropdownItem>
                    <MDBDropdownItem onClick={onLogout} link>Logout</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </li>
            }
            </ul>          
        </nav>
      </header>
      
      
      <AppRouter/>
    </>
  )
}
