import { useDispatch } from 'react-redux';
import {  MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';
import { startAddNote } from '../../store/notas/thunks';

export const NotasPage = () => {

  const dispatch = useDispatch ();

  const onClickNewNote = () =>{
    dispatch (startAddNote());
  }
  return (
    <>
      <div className="popupbox">
        <div className="popup">
          <div className="contenido">
            <header>
                <p>Añade una nota nueva</p>
                <i className='uil uil-times'></i>                          
            </header>
          <form>
            <MDBInput id='title' wrapperClass='mb-4' label='Titulo' />
            <MDBTextArea wrapperClass='mb-4' id='description' rows='4' label='Descripcion' />
            <p>Eliga la prioridad</p>
            <div className='seleccion'>
              <input type="radio" id="baja" name="prioridad" value="baja" />
              <img className="prioridad" for="baja" src=".\img\squirtle.png" alt="baja" />
              <label for="baja">baja</label>

              <input type="radio" id="media" name="prioridad" value="media" />
              <img className="prioridad" for="media" src=".\img\bullbasaur.png" alt="media" />
              <label for="media">media</label>

              <input type="radio" id="alta" name="prioridad" value="alta" />
              <img className="prioridad" for="alta" src=".\img\charmander.png" alt="alta" />
              <label for="alta">alta</label>
            </div>
            
            <MDBBtn type='submit' className='mb-4' block>
              Aceptar
            </MDBBtn>
            
          </form>

          </div>
        </div>
      </div>
      <div className="notas">
        <div className="caja">
          <div className="detallesaltos">
            <p>Titulo</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed tincidunt lectus, ut fermentum nunc. Aenean ullamcorper pulvinar nisi nec hendrerit. Pellentesque dignissim sagittis est quis pharetra. Morbi faucibus nunc libero, a commodo felis faucibus quis. Duis nec augue metus</span>
          </div>
          <div className="detallesbajos">
            <span>25/enero/2023</span>
            <img className="prioridad" src=".\img\bullbasaur.png" alt="media" />
            <div className="botones">
              <i className="uil uil-edit-alt"></i>
              <i className="uil uil-multiply"></i>
            </div>
          </div>
        </div>
        <div className="caja">
        <div className="detallesaltos">
            <p>Titulo</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed tincidunt lectus, ut fermentum nunc. Aenean ullamcorper pulvinar nisi nec hendrerit. Pellentesque dignissim sagittis est quis pharetra. Morbi faucibus nunc libero, a commodo felis faucibus quis. Duis nec augue metus</span>
          </div>
          <div className="detallesbajos">
            <span>25/enero/2023</span>
            <img className="prioridad" src=".\img\charmander.png" alt="alta" />
            <div className="botones">
              <i className="uil uil-edit-alt"></i>
              <i className="uil uil-multiply"></i>
            </div>
          </div>
        </div>
        <div className="caja">
          <div className="detallesaltos">
            <p>Titulo</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed tincidunt lectus, ut fermentum nunc. Aenean ullamcorper pulvinar nisi nec hendrerit. Pellentesque dignissim sagittis est quis pharetra. Morbi faucibus nunc libero, a commodo felis faucibus quis. Duis nec augue metus</span>
          </div>
          <div className="detallesbajos">
            <span>25/enero/2023</span>
            <img className="prioridad" src=".\img\bullbasaur.png" alt="media" />
            <div className="botones">
              <i className="uil uil-edit-alt"></i>
              <i className="uil uil-multiply"></i>
            </div>
          </div>
        </div>
        <div className="caja">
        <div className="detallesaltos">
            <p>Titulo</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed tincidunt lectus, ut fermentum nunc. Aenean ullamcorper pulvinar nisi nec hendrerit. Pellentesque dignissim sagittis est quis pharetra. Morbi faucibus nunc libero, a commodo felis faucibus quis. Duis nec augue metus</span>
          </div>
          <div className="detallesbajos">
            <span>25/enero/2023</span>
            <img className="prioridad" src=".\img\squirtle.png" alt="baja" />
            <div className="botones">
              <i className="uil uil-edit-alt"></i>
              <i className="uil uil-multiply"></i>
            </div>
          </div>
        </div>
        <div className="caja">
          <div className="detallesaltos">
            <p>Titulo</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed tincidunt lectus, ut fermentum nunc. Aenean ullamcorper pulvinar nisi nec hendrerit. Pellentesque dignissim sagittis est quis pharetra. Morbi faucibus nunc libero, a commodo felis faucibus quis. Duis nec augue metus</span>
          </div>
          <div className="detallesbajos">
            <span>25/enero/2023</span>
            <img className="prioridad" src=".\img\bullbasaur.png" alt="media" />
            <div className="botones">
              <i className="uil uil-edit-alt"></i>
              <i className="uil uil-multiply"></i>
            </div>
          </div>
        </div>
          <div className="añadir">
            <div className="icon"><i className="uil uil-plus"></i></div>
          </div>
      </div>
    </>
    
  )
}