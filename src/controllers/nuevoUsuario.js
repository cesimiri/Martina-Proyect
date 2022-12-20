import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanciaAxios } from '../Api/Axios';

const nuevoUsuarioController = createAsyncThunk("nuevoUsuario/PostNuevoUsuarioController", async (datosNuevoUsuario) => {
  const respuesta = await instanciaAxios.post("/nuevoUsuario.php", {
    metodo: "ingresoNU",
    query: datosNuevoUsuario,
  })
  //console.log(respuesta)
  // console.log("desde el controlador" , datosNuevoUsuario)
  return respuesta.data
})

export default nuevoUsuarioController 
