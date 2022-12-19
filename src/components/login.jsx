import './login.css'
import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './navbar';
import NuevoUsuario from './nuevoUsuario';
import { useSelector , useDispatch } from 'react-redux';
import LoginController from '../controllers/login';
import { setVariable1, setContrasena } from '../reducers/Login'

const Login = () => {
  const dispatch = useDispatch()
  const loginSelector = useSelector(state =>state.login);

  const handleChangeVariable1 = (e) => {
    dispatch(setVariable1(e.target.value))
  }
  const handleChangeContrasena = (e) => {
    dispatch(setContrasena(e.target.value))
  }

  const ingresar = (e) => {
    e.preventDefault()
    const ingresar = {
      variable1 : loginSelector.datosLogin.variable1  ,
      contrasena : loginSelector.datosLogin.contrasena ,
    }
    dispatch(LoginController(ingresar));
    // console.log("desde el ingresar" , ingresar)

   }
  // const loginI = () => dispatch(login())

  return (
    <Fragment>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Ingreso</h2>
                    <p className="text-white-50 mb-5">Ingrese su usuario y contraseña!</p>

                    <div className="form-outline form-white mb-4">
                      <input type="text" className="form-control form-control-lg" onChange={handleChangeVariable1} minLength='10' maxLength= '10' required />
                      <label className="form-label" >CEDULA</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={handleChangeContrasena} required />
                      <label className="form-label" htmlFor="typePasswordX">CONTRASEÑA</label>
                    </div>

                    {/* <Link className='btn btn-outline-light btn-lg px-5' type="submit" to='/NavBar'>Ingresar</Link> */}

                    <button onClick={ingresar}>Ingresar</button>

                  </div>

                  <div>
                    <p className="mb-0">No tiene una cuenta?
                      <Link className="text-white-50 fw-bold" to='/nuevoUsuario'>Nuevo Usuario</Link>
                    </p>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path='/NavBar' index element={<NavBar />} />
          <Route path='/nuevoUsuario' index element={<NuevoUsuario />} />
          <Route path='/login' index element={<Login />} />

        </Routes>
      </section>
    </Fragment>


  )

}

export default Login