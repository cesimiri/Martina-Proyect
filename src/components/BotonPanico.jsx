import React from "react";
import './boton.css'
import { useSelector, useDispatch } from 'react-redux/';
import {consultarMV ,  consultarNum } from "../controllers/botonPanico";

const BotonPanico = () => {
    const dispatch = useDispatch();
    const martinaSelector = useSelector(state => state.martina)
    const martinaUbicaciones = martinaSelector.ubicaciones;
    console.log("ubic", martinaUbicaciones)
    
    const handleChange = e => {
        dispatch(consultarMV(e.target.value))
    }
    const handleChangeNum = e => {
        dispatch(consultarNum(e.target.value))
    }
    
    return (
        <div className="cone">
            <div className="mt-3 text-center">
                <h1>Historial de boton de pánico</h1>
                <input className="mt-3 rounded"
                    type='TEXT'
                    placeholder='Número de MZ & V.'
                    onChange={handleChange}
                ></input>
                <input className="mt-3 rounded"
                    type='TEXT'
                    maxLength='10'
                    placeholder='Número telefonico'
                    onChange={handleChangeNum}
                ></input>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Telf. Usuario</th>
                            <th scope="col">Fecha/ Hora</th>
                            <th scope="col">Teléfono 1</th>
                            <th scope="col">Teléfono 2</th>
                            <th scope="col">Email 1</th>
                            <th scope="col">Email 2</th>
                            <th scope="col">Mz & V</th>
                        </tr>


                    </thead>
                    <tbody>
                        {martinaUbicaciones.map((u, i) => (
                            <tr key={i}>
                                <th scope="row">{u.botpan_usuari}</th>
                                <td>{u.botpan_fecha}</td>
                                <td>{u.botpan_conta1}</td>
                                <td>{u.botpan_conta2}</td>
                                <td>{u.botpan_email1}</td>
                                <td>{u.botpan_email2}</td>
                                <td>{u.botpan_ubicac}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BotonPanico