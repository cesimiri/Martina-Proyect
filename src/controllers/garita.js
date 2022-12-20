import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanciaAxios } from '../Api/Axios';

export const ObtenerGarita = createAsyncThunk("garita/ObtenerGarita", async () => {

    const respuesta = await instanciaAxios.post("/garita.php", {
        metodo: "NumeroGarita"
    })

    return respuesta.data
})

export const IngresoGarita = createAsyncThunk("garita/IngresoGarita", async (numeroGarita) => {
    const respuesta = await instanciaAxios.post("/garita.php", {
        metodo: "ingresarNuevoNumeroGarita",
        ...numeroGarita,
    })

    return respuesta.data
})




