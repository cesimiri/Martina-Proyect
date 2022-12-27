import React from "react"
import { useSelector , useDispatch } from "react-redux";
import { visitaController , buscarMzV } from "../controllers/visita";
import { setVisitaUrbanizacion , setVisitaDestino , setVisitaAutorizacion , setVisitaNombre , setVisitaCedula } from "../reducers/MartinaReducers"
const Visitas = () =>{
    const dispatch = useDispatch();
    const martinaSelector = useSelector(state => state.martina);
    const martinaUbicaciones = martinaSelector.ubicaciones ;    
    const martinaVisitas = martinaSelector.datosVisita
    

    const handleChangeBusqueda = e => {
        dispatch(buscarMzV(e.target.value))
    }
    const handleChangeUrbanizacion = (e) =>{
        dispatch(setVisitaUrbanizacion(e.target.value))
    }   
    const handleChangeDestino = (e) =>{
        dispatch(setVisitaDestino(e.target.value))
    }
    const handleChangeAutorizacion = (e) =>{
        dispatch(setVisitaAutorizacion(e.target.value))
    }     
    const handleChangeNombre = (e) =>{
        dispatch(setVisitaNombre(e.target.value))
    } 
    const handleChangeCedula = (e) =>{
        dispatch(setVisitaCedula(e.target.value))
    }     

    const enviar = (e) =>{
        e.preventDefault()
        const datos = {
            urbanizacion : martinaVisitas.urbanizacion ,
            destino : martinaVisitas.destino , 
            autorizado : martinaVisitas.autorizado , 
            nombreVisita : martinaVisitas.nombreVisita ,
            cedula : martinaVisitas.cedula , 
        }
        dispatch(visitaController(datos))

        e.target.reset();
        // console.log(datos)
    } 
    return (
        <div class="mt-5 text-center ">
            <div className="contenedor">

                <div className="contenedor1">
                <h1>REPORTERIA DE VISITAS POR VILLA</h1>
                    <input class="mt-3 rounded" type='TEXT' placeholder='BUSCAR MZ & V' onChange={handleChangeBusqueda} ></input>
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
                            {martinaUbicaciones.map((u , i ) =>(
                                <tr key={i}>
                                    <th scope="row">{u.mavisi_urbani}</th>
                                    <td>{u.mavisi_destin}</td>
                                    <td>{u.mavisi_autori}</td>
                                    <td>{u.mavisi_nomvis}</td>
                                    <td>{u.mavisi_cedula}</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>

                <div className="contenedor2" onSubmit={enviar}>
                    <h1>Registro de visitas</h1>
                    <form class="pt-3">
                        <div class="mb-3">
                            <label class="form-label">URBANIZACIÓN</label>
                            <input type="text" class="form-control rounded" onChange={handleChangeUrbanizacion}  required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">VILLA DESTINO </label>
                            <input type="text" class="form-control rounded" onChange={handleChangeDestino} required />
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">AUTORIZADO POR </label>
                            <input type="text" class="form-control" onChange={handleChangeAutorizacion}  required />
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">NOMBRE DEL VISITANTE</label>
                            <input type="text" class="form-control rounded" onChange={handleChangeNombre}  required />
                        </div>
                        <div class="mb-3 ">
                            <label class="form-label">CEDULA DEL VISITANTE</label>
                            <input type="text" class="form-control rounded" onChange={handleChangeCedula} maxLength= '10' required />
                        </div>
                        <button type="submit" >Grabar</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Visitas  