import React from "react";
import './boton.css'
import { useSelector, useDispatch } from 'react-redux/';
import consultar from "../controllers/botonPanico";

const BotonPanico = () => {
    const dispatch = useDispatch();
    const martinaSelector = useSelector(state => state.martina)
    const martinaUbicaciones = martinaSelector.ubicaciones;
    // console.log("ubic", martinaUbicaciones)
    const handleChange = e => {
        dispatch(consultar(e.target.value))
    }

    return (
        <div className="cone">
            <div class="mt-3 text-center">
                <h1>Historial de boton de pánico</h1>
                <input class="mt-3 rounded"
                    type='TEXT'
                    placeholder='Número de MZ & V.'
                    onChange={handleChange}
                ></input>
                <table class="table mt-5">
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
                        <tr>
                            <th scope="row">0996254630</th>
                            <td>21/11/2022 14:17:19</td>
                            <td>0996895014</td>
                            <td>0996895014</td>
                            <td>carlosmorles@hotmail.com</td>
                            <td>carlosmorles@hotmail.com</td>
                            <td>Mz.20 V.14E</td>
                        </tr>
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