import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanciaAxios } from '../Api/Axios';

const nuevoUsuarioController = createAsyncThunk("nuevoUsuario/PostNuevoUsuario", async (datosNuevoUsuario) => {
    const respuesta = await instanciaAxios.post("/", {
        metodo: "",
        query: datosNuevoUsuario,
    })
    //  console.log(respuesta.data.estado)
   
     if (respuesta.data.estado === 1 ){
        return respuesta.data
    }else{
        // póner
    }
    
})

export default nuevoUsuarioController 
