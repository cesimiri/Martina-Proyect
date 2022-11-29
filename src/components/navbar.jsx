import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from '../img/martina.jpg'
import Garita from '../components/garita';
import Villas from '../components/villas';
import BotonPanico from '../components/BotonPanico';
import './navBar.css';

// import ObtenerGarita from "../controllers/garita";
const NavBar = () => {
  
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <Link className='martina' to='/'><img className='martina' src={logo} alt='imagen' /></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link className='nav-link' to='/garita' >GARITA</Link>
            <Link className='nav-link' to='/villas'>VILLAS</Link>
            <Link className='nav-link' to='/botonpanico'>REPORTERIA</Link>
              
            </div>
          </div>
        </div>
      </nav>


      <Routes>
        <Route path='/' />
        <Route path='/garita' element={<Garita />} />
        <Route path='/villas' element={<Villas />} />
        <Route path='/botonpanico' element={<BotonPanico />} />
      </Routes>

    </Fragment>


  )
}

export default NavBar