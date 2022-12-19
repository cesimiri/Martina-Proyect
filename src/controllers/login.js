import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanciaAxios } from '../Api/Axios';

const LoginController = createAsyncThunk("login/PostLoginController", async (datosLogin) => {
    const respuesta = await instanciaAxios.post("/login.php", {
        metodo: "ingresoLogin",
        query: datosLogin,
    })
    //   console.log(respuesta.data)
    // console.log("desde el controlador" , datosLogin)
    
        return respuesta.data
    
    
})

export default LoginController 
