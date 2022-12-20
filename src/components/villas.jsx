import React from "react";
import './villas.css'
import { setCiudad, setUrbanizacion, setPropietario, setResidente, setMzv } from "../reducers/MartinaReducers";
import { useSelector, useDispatch } from "react-redux";
import { ingresarVillaController } from "../controllers/villas";

const Villas = () => {
    const dispatch = useDispatch();
    const martinaSelector = useSelector(state => state.martina);
    const handleChangeCiudad = (e) => {
        dispatch(setCiudad(e.target.value))
    }
    const handleChangeUrba = (e) => {
        dispatch(setUrbanizacion(e.target.value))
    }
    const handleChangePropi = (e) => {
        dispatch(setPropietario(e.target.value))
    }
    const handleChangeResidente = (e) => {
        dispatch(setResidente(e.target.value))
    }
    const handleChangeMzV = (e) => {
        dispatch(setMzv(e.target.value))
    }

    const enviar = (e) => {
        e.preventDefault()
        const datosVilla = {
            ciudad: martinaSelector.datosVilla.ciudad,
            urbanizacion: martinaSelector.datosVilla.urbanizacion,
            propietario: martinaSelector.datosVilla.propietario,
            residente: martinaSelector.datosVilla.residente,
            mzv: martinaSelector.datosVilla.mzv,
        }
        dispatch(ingresarVillaController(datosVilla))
        e.target.reset();

    }
    return (
        <div class="mt-5 text-center ">
            <div className="contenedor">

                <div className="contenedor1">
                    <input class="mt-3 rounded" type='TEXT' placeholder='BUSCAR MZ & V'  ></input>
                    <table class="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Ciudad</th>
                                <th scope="col">Urbanización</th>
                                <th scope="col">Propietario</th>
                                <th scope="col">Residente</th>
                                <th scope="col">Mz & V</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Guayaquil</th>
                                <td>Martina</td>
                                <td>Otto</td>
                                <td>Carlos</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <th scope="row">Guayaquil</th>
                                <td>Martina</td>
                                <td>Otto</td>
                                <td>Carlos</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <th scope="row">Guayaquil</th>
                                <td>Martina</td>
                                <td>Otto</td>
                                <td>Carlos</td>
                                <td>14</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="contenedor2" onSubmit={enviar}>
                    <h1>Nueva Villa</h1>
                    <form class="pt-3">
                        <div class="mb-3">
                            <label class="form-label">CIUDAD</label>
                            <input type="text" class="form-control rounded" onChange={handleChangeCiudad} required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">URBANIZACIÓN </label>
                            <input type="text" class="form-control rounded" onChange={handleChangeUrba} required />
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">PROPIETARIO</label>
                            <input type="text" class="form-control" onChange={handleChangePropi} required />
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">RESIDENTE</label>
                            <input type="text" class="form-control rounded" onChange={handleChangeResidente} required />
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">MANZANA & VILLA</label>
                            <input type="text" class="form-control rounded" onChange={handleChangeMzV} required />
                        </div>
                        <button type="submit" >Grabar</button>
                    </form>
                </div>

            </div>

        </div>

    )

}


export default Villas