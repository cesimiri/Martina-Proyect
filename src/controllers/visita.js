import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanciaAxios } from '../Api/Axios';

export const visitaController = createAsyncThunk("ingresoVilla/ingresarVillaController", async (datosVisita) => {

    const respuesta = await instanciaAxios.post("/visita.php", {
        metodo: "ingresarVisita" ,
        query : datosVisita ,
    })
    // console.log("controlador" , datosVilla)
    // console.log("controlador" , respuesta)
    return respuesta.data
})

export const buscarMzV = createAsyncThunk("buscarVilla/buscarVillaController", async (datosVisita) => {
    const respuesta = await instanciaAxios.post("/visita.php", {
        metodo: "buscarMzV" ,
        query : datosVisita ,
    })
    // console.log("controlador" , datosVilla)
    // console.log("controlador" , respuesta.data)
    return respuesta.data
})
