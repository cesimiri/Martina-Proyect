import './login.css'
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './navbar';
import { useSelector ,  useDispatch } from 'react-redux/'
import { setNombres , setApellidos , setCedula , setContrasena } from '../reducers/MartinaReducers';
import nuevoUsuarioController from '../controllers/nuevoUsuario';
const NuevoUsuario = () => {
    const dispatch = useDispatch();
    const martinaSelector = useSelector(state => state.martina) ;

    const handleChangeNombres = (e) =>{
        dispatch(setNombres(e.target.value))
    }
    const handleChangeApellidos = (e) =>{
        dispatch(setApellidos(e.target.value))
    }
    const handleChangeCedula = (e) =>{
        dispatch(setCedula(e.target.value))
    }
    const handleChangeContrasena = (e) =>{
        dispatch(setContrasena(e.target.value))
    }

    const enviar = (e)=>{
        e.preventDefault()
        const registroUsuario = {
            nombres : martinaSelector.datosNuevo.nombres , 
            apellidos :  martinaSelector.datosNuevo.apellidos , 
            cedula : martinaSelector.datosNuevo.cedula , 
            contrasena : martinaSelector.datosNuevo ,
        }
        // console.log(registroUsuario)
        dispatch(nuevoUsuarioController(registroUsuario))
        e.target.reset()
    }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" >
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Nuevo usuario</h2>
                                    <form onSubmit={enviar}>
                                        
                                        <div className="form-outline form-white mb-4">
                                            <input type="text" id="typeEmailX" className="form-control form-control-lg" onChange={handleChangeNombres} required />
                                            <label className="form-label" htmlFor="typeEmailX">Nombres</label>
                                            <input type="text" id="typeEmailX" className="form-control form-control-lg" onChange={handleChangeApellidos} required />
                                            <label className="form-label" htmlFor="typeEmailX">Apellidos</label>
                                            <input type="text" id="typeEmailX" className="form-control form-control-lg" maxLength='10' pattern="[0-9]+" onChange={handleChangeCedula} required />
                                            <label className="form-label" htmlFor="typeEmailX">Cedula</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={handleChangeContrasena} required/>
                                            <label className="form-label" htmlFor="typePasswordX">CONTRASEÑA</label>
                                        </div>

                                        <button type="submit" >
                                            Guardar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path='/NavBar' index element={<NavBar />} />
                <Route path='/nuevoUsuario' index element={<nuevoUsuario />} />
            </Routes>
        </section>
    )

}

export default NuevoUsuario