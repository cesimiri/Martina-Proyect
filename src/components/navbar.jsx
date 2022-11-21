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

    <div className='navbar'>
      <Link className='martina' to='/'><img className='martina' src={logo} alt='imagen' /></Link>

      <Link className='menu' to='/garita'>GARITA</Link>

      <Link className='menu' to='/villas'>VILLAS</Link>

      <Link className='menu' to='/botonpanico'>REPORTERIA</Link>
      </div>


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