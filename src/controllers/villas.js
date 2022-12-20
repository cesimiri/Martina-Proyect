import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanciaAxios } from '../Api/Axios';

export const ingresarVillaController = createAsyncThunk("ingresoVilla/ingresarVillaController", async (datosVilla) => {

    const respuesta = await instanciaAxios.post("/villas.php", {
        metodo: "ingresarVilla" ,
        query : datosVilla ,
    })
    // console.log("controlador" , datosVilla)
    // console.log("controlador" , respuesta)
    return respuesta.data
})

export const buscarVillaController = createAsyncThunk("buscarVilla/buscarVillaController", async (datosVilla) => {
    const respuesta = await instanciaAxios.post("/villas.php", {
        metodo: "buscarMzV" ,
        query : datosVilla ,
    })

    return respuesta.data
})
