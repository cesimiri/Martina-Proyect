import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux/'
import { ObtenerGarita , IngresoGarita } from "../controllers/garita";
import { setNuevoNumero } from "../reducers/MartinaReducers";
import './garita.css';

const Garita = () => {
    const dispatch = useDispatch();
    const martinaSelector = useSelector(state => state.martina)
    const martinaNumero = martinaSelector.numeroGarita
    // console.log ("DATA =>",martinaSelector.numeroGarita)
    

    const handleChangeNumero = e =>{
        dispatch(setNuevoNumero(e.target.value))
    }

    const enviar = (e)=>{
        e.preventDefault()
        const numero = {
            nuevoNumero : martinaSelector.nuevoNumero 
        }
        // console.log("Numero: ", numero)
        dispatch(IngresoGarita(numero))
        e.target.reset()
    }

    useEffect(() => {
        dispatch(ObtenerGarita())
        // console.log("ENVIADO")
    }, [dispatch])
    
    return (
        <>
            <div className="garita">
                <h1>Información de garita</h1>
                <form className="formulario">
                    <label >Número Actual</label>
                    <label className="actual">{martinaNumero}</label>


                </form>
                <h1>Agregar Nuevo Número</h1>
                <form className="formulario" onSubmit={enviar}>
                    <label className="texto">Ingrese Nuevo Número</label>
                    <input className="actual" maxLength='10' minLength='10' type='text' placeholder='nuevo número' onChange={handleChangeNumero} required pattern="[0-9]+"></input>
                    {/* <input className="actual" maxLength='10' type='TEXT' placeholder='solo letra' onChange={handleChangeNumero} required pattern="[a-zA-Z]+"></input> */}
                    <hr className="separador2" />
                    <button type="submit">
                        Guardar
                    </button>
                </form>
            </div>
        </>


    )


}

export default Garita;

