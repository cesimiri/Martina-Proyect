import React from "react";
import './villas.css'

const Villas = () => {
    return (
        <div class="mt-5 text-center ">
            <div className="contenedor">

                <div className="contenedor1">
                    <input class="mt-3 rounded" type='TEXT' placeholder='BUSCADOR DE VILLA'  ></input>
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

                <div className="contenedor2">
                    <h1>Nueva Villa</h1>
                    <form class="pt-3">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Ciudad</label>
                            <input type="text" class="form-control rounded" id="exampleInputEmail1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Urbanización</label>
                            <input type="text" class="form-control rounded" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 ">
                            <label for="exampleInputPassword1" class="form-label">Propietario</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="mb-3 ">
                            <label for="exampleInputPassword1" class="form-label">Residente</label>
                            <input type="text" class="form-control rounded" />
                        </div>
                        <div class="mb-3 ">
                            <label for="exampleInputPassword1" class="form-label">Manzana & villa</label>
                            <input type="text" class="form-control rounded" />
                        </div>
                        <button type="submit" class="btn btn-primary">Grabar</button>
                    </form>
                </div>

            </div>

        </div>

    )

}


export default Villas