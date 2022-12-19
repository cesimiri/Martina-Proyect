import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanciaAxios } from '../Api/Axios';

export const consultarMV = createAsyncThunk("datosCasa/PostDatosCasa", async (datosCasa) => {
    const respuesta = await instanciaAxios.post("/buscarMzV.php", {
        metodo: "buscarMzV",
        query: datosCasa,
    })
    // console.log("controlador" , respuesta.data)


    return respuesta.data   


})

export const consultarNum = createAsyncThunk("botonPanico/consultarNum", async (datosCasa) => {
    // console.log(datosCasa)
    const respuesta = await instanciaAxios.post("/buscarMzV.php", {
        metodo: "buscarTelefono",
        query: datosCasa,
    })
    console.log(respuesta)
    return respuesta.data

})
