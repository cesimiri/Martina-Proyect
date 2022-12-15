import './login.css'
import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './navbar';
import NuevoUsuario from './nuevoUsuario';

const Login = () => {
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
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="typeEmailX">CEDULA</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="typePasswordX">CONTRASEÑA</label>
                    </div>

                    <Link className='btn btn-outline-light btn-lg px-5' type="submit" to='/NavBar'>Ingresar</Link>
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
          <Route path='/nuevoUsuario/*' index element={<NuevoUsuario />} />
        </Routes>
      </section>
    </Fragment>


  )

}

export default Login