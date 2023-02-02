import React from 'react'

export const Notas = ({popuponclick}) => {
  return (
    <>
    <div className="notas">
        <div onClick={ popuponclick } className="añadir">
          <div className="icon"><i className="uil uil-plus"></i></div>
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
      </div>
    </>
  )
}
