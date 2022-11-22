import React from "react";
import './garita.css';
const Garita = () => {
    return (
        <>
            
            <div className="garita">
                <h1>Información de garita</h1>
                <form className="formulario">
                    <label >Número Actual</label>
                    <label className="actual">0999999999</label>


                </form>
                <h1>Agregar Nuevo Número</h1>
                <form className="formulario">
                    <label className="texto">Ingrese Nuevo Número</label>
                    <input className="actual" class="rounded" type='TEXT' placeholder='nuevo número' required></input>
                    <hr className="separador2" />
                    <button>
                        Guardar
                    </button>
                </form>
            </div>
        </>


    )


}

export default Garita;

