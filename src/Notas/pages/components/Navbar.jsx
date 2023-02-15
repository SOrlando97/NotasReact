import {  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../../store/auth';

export const Navbar = () => {
    const { status, displayName } = useSelector ( state => state.auth);
    const prueba = useSelector ( state => state.auth);
    console.log(prueba);
    let statusactual ='';
    (status === 'authenticated')? statusactual = 'autenticado': statusactual = '';
    const dispatch = useDispatch();
    const onLogout = () =>{
        dispatch( startLogout());
    }
  return (
    <>
        {/* <header className="header">
            <nav>
                <ul className="navlinks">
                {statusactual && <li className='navli'><a href="" className='alink'>Notas</a></li>}
                {!statusactual && <li className='navli'><a href="" className='alink'>Inicio de Sesion</a></li>} */}                
                {statusactual && 
                <ul className='navlibutton'>
                    <MDBDropdown>
                    <MDBDropdownToggle tag='b' className='libutton'>
                    <img className='imguser' src="/img/acceso.png" alt="user_icon" /> 
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                        {/* <MDBDropdownItem href='/auth/login' link>Cuenta</MDBDropdownItem> */}
                        <MDBDropdownItem className='username' >{displayName}</MDBDropdownItem>
                        <MDBDropdownItem onClick={onLogout} link>Salir</MDBDropdownItem>
                    </MDBDropdownMenu>
                    </MDBDropdown>
                </ul>
                }               
                {/* </ul>          
            </nav>
        </header> */}
    </>
  )
}
