import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from '../img/martina.jpg'
import Garita from '../components/garita';
import Villas from '../components/villas';
import BotonPanico from '../components/BotonPanico';
import './navBar.css';


const NavBar = () => {

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className='martina' to='/'><img className='martina' src={logo} alt='imagen' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className='nav-link' to='/garita' >GARITA</Link>
              <Link className='nav-link' to='/villas'>VILLAS</Link>
              <Link className='nav-link' to='/botonpanico'>REPORTERIA</Link>
            </div>
          </div>

        </div>
      </nav>
      

      <Routes>
      
        <Route path='/garita' index element={<Garita />} />
        <Route path='/villas' element={<Villas />} />
        <Route path='/botonpanico' element={<BotonPanico />} />
      </Routes>
    
    </Fragment>

  )
}

export default NavBar