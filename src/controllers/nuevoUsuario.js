import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanciaAxios } from '../Api/Axios';

const nuevoUsuarioController = createAsyncThunk("nuevoUsuario/PostNuevoUsuarioController", async (datosNuevoUsuario) => {
    const respuesta = await instanciaAxios.post("/nuevoUsuario.php", {
        metodo: "ingresoNU",
        query: datosNuevoUsuario,
    })
    //   console.log(respuesta)
    // console.log("desde el controlador" , datosNuevoUsuario)

     if (respuesta.data.estado === 1 ){
        return respuesta.data
    }else{
        // póner
    }
    
})

export default nuevoUsuarioController 
