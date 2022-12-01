import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanciaAxios } from '../Api/Axios';

const consultar = createAsyncThunk("datosCasa/PostDatosCasa", async (datosCasa) => {
    const respuesta = await instanciaAxios.post("/buscarMzV.php", {
        metodo: "buscarMzV",
        query: datosCasa,
    })
    //  console.log(respuesta)
    return respuesta.data
})
export default consultar;