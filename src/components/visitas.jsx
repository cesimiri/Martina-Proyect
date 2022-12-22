import React from "react"

const Visitas = () =>{

    const a = () =>{
        console.log("!")
    }
    return (
        <div class="mt-5 text-center ">
            <div className="contenedor">

                <div className="contenedor1">
                <h1>REPORTERIA DE VISITAS POR VILLA</h1>
                    <input class="mt-3 rounded" type='TEXT' placeholder='BUSCAR MZ & V' onChange={a} ></input>
                    <table class="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">URBANIZACIÓN</th>
                                <th scope="col">VILLA DESTINO </th>
                                <th scope="col">AUTORIZADO POR</th>
                                <th scope="col">NOMBRE DEL VISITANTE</th>
                                <th scope="col">CEDULA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {martinaUbicaciones.map((u , i ) =>(
                                <tr key={i}>
                                    <th scope="row">{u.martmv_ciudad}</th>
                                    <td>{u.martmv_urbani}</td>
                                    <td>{u.martmv_propie}</td>
                                    <td>{u.martmv_reside}</td>
                                    <td>{u.martmv_manvil}</td>
                                </tr>
                            )) } */}
                        </tbody>
                    </table>
                </div>

                <div className="contenedor2" onSubmit={a}>
                    <h1>Registro de visitas</h1>
                    <form class="pt-3">
                        <div class="mb-3">
                            <label class="form-label">URBANIZACIÓN</label>
                            <input type="text" class="form-control rounded" onChange={a}  required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">VILLA DESTINO </label>
                            <input type="text" class="form-control rounded" onChange={a} required />
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">AUTORIZADO POR </label>
                            <input type="text" class="form-control" onChange={a}  required />
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">NOMBRE DEL VISITANTE</label>
                            <input type="text" class="form-control rounded" onChange={a}  required />
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">CEDULA DEL VISITANTE</label>
                            <input type="text" class="form-control rounded" onChange={a} required />
                        </div>
                        <button type="submit" >Grabar</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Visitas  