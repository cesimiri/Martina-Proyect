import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanciaAxios } from '../Api/Axios';

const consultar = createAsyncThunk("datosCasa/PostDatosCasa", async (datosCasa) => {
    const respuesta = await instanciaAxios.post("/buscarMzV.php", {
        metodo: "buscarMzV",
        query: datosCasa,
    })
    //  console.log(respuesta.data.estado)
     if (respuesta.data.estado === 1 ){
        return respuesta.data
    }else{
        return []
    }
    
})
export default consultar;