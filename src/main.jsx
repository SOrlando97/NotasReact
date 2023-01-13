import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NotasApp } from './NotasApp'
import 'bootstrap/dist/css/bootstrap.css';
import './Styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NotasApp />
    </BrowserRouter>    
  </React.StrictMode>,
)
