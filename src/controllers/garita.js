import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanciaAxios } from '../Api/Axios';

export const ObtenerGarita = createAsyncThunk("garita/PostGarita", async () => {
    const respuesta = await instanciaAxios.post("/garita.php", {
        metodo: "NumeroGarita",
    })
    // console.log("SERVER =>", respuesta)
    return respuesta.data
})

export const IngresoGarita = createAsyncThunk("numero/PostNumero", async (numeroGarita) => {
    const respuesta = await instanciaAxios.post("/garita.php", {
        metodo: "ingresarNuevoNumeroGarita",
        ...numeroGarita,
    })
    // console.log(respuesta.data)
    return respuesta.data
})




