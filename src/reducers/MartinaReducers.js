import { createSlice } from "@reduxjs/toolkit";
import LoginController from "../controllers/login";
import { IngresoGarita, ObtenerGarita } from "../controllers/garita";
import { consultarMV, consultarNum } from "../controllers/botonPanico";
import { ingresarVillaController , buscarVillaController } from "../controllers/villas";
import nuevoUsuarioController from "../controllers/nuevoUsuario";
const initialState = {
    numeroGarita: '',
    nuevoNumero: '',
    ubicaciones: [],
    datosNuevo: {
        nombres: '',
        apellidos: '',
        cedula: '',
        contrasena: '',
    },
    datosVilla: {
        ciudad: '',
        urbanizacion: '',
        propietario: '',
        residente: '',
        mzv: '',
    },
    datosVisita: {
        urbanizacion: '', 
        destino: '',
        autorizado: '',
        nombreVisita: '',
        cedula: '',
    }
}

const MartinaSlice = createSlice({
    name: "martina",
    initialState: initialState,
    reducers: {
        setVisitaUrbanizacion: (state, action) =>{
            const algo = action.payload
            state.datosVisita.urbanizacion = algo
        },
        setVisitaDestino: (state, action) =>{
            const algo = action.payload
            state.datosVisita.destino = algo
        },
        setVisitaAutorizacion: (state, action) =>{
            const algo = action.payload
            state.datosVisita.autorizado = algo
        },
        setVisitaNombre: (state, action) =>{
            const algo = action.payload
            state.datosVisita.nombreVisita = algo
        },
        setVisitaCedula: (state, action) =>{
            const algo = action.payload
            state.datosVisita.cedula = algo
        },

        setNuevoNumero: (state, action) => {
            const algo = action.payload
            state.nuevoNumero = algo
        },
        setNombres: (state, action) => {
            const algo = action.payload
            state.datosNuevo.nombres = algo
        },
        setApellidos: (state, action) => {
            const algo = action.payload
            state.datosNuevo.apellidos = algo
        },
        setCedula: (state, action) => {
            const algo = action.payload
            state.datosNuevo.cedula = algo
        },
        setContrasena: (state, action) => {
            const algo = action.payload
            state.datosNuevo.contrasena = algo
        },
        setCiudad: (state, action) => {
            const algo = action.payload
            state.datosVilla.ciudad = algo
        },
        setUrbanizacion: (state, action) => {
            const algo = action.payload
            state.datosVilla.urbanizacion = algo
        },
        setPropietario: (state, action) => {
            const algo = action.payload
            state.datosVilla.propietario = algo
        },
        setResidente: (state, action) => {
            const algo = action.payload
            state.datosVilla.residente = algo
        },
        setMzv: (state, action) => {
            const algo = action.payload
            state.datosVilla.mzv = algo
        },
    },

    extraReducers: (builder) => {

        builder.addCase(ObtenerGarita.pending, (state) => {
            state.isLoading = true
            console.log("COMENSE")
        }).addCase(ObtenerGarita.fulfilled, (state, action) => {
            state.isLoading = false
            console.log(action)
            state.numeroGarita = action.payload.data.num.num.garita_fono
        }).addCase(ObtenerGarita.rejected, (state, action) => {
            state.isLoading = false
            alert("ERROR DE COMUNICACIÖN")
        }).addCase(IngresoGarita.pending, (state) => {
            state.isLoading = true
            console.log("COMENSE")
        }).addCase(IngresoGarita.fulfilled, (state, action) => {
            state.isLoading = false
            state.numeroGarita = action.payload.data
        }).addCase(IngresoGarita.rejected, (state, action) => {
            state.isLoading = false
            alert("ERROR DE COMUNICACIÖN")
        }).addCase(consultarMV.pending, (state) => {
            state.isLoading = true
        }).addCase(consultarMV.fulfilled, (state, action) => {
            state.isLoading = false
            console.log("martina", action.payload)
            const estado = action.payload.estado
            if (estado === 1) {
                state.ubicaciones = action.payload.data.listadoUbicaciones
            } else {
                alert("NO EXISTE!")
            }
        }).addCase(consultarNum.pending, (state) => {
            state.isLoading = true
        }).addCase(consultarNum.fulfilled, (state, action) => {
            state.isLoading = false
            // console.log("aqui", action.payload.data.listadoUbicaciones)
            const estado = action.payload.estado
            if (estado === 1) {
                state.ubicaciones = action.payload.data.listadoUbicaciones
            } else {
                alert("NO EXISTE!");
            }
        }).addCase(ingresarVillaController.pending, (state) => {
            state.isLoading = true
        }).addCase(ingresarVillaController.fulfilled, (state, action) => {
            state.isLoading = false
            // console.log("aqui", action.payload.data.listadoUbicaciones)
            const estado = action.payload.estado
            if (estado === 1) {
                alert ("DATOS INGRESADOS")
            } else if (estado === 5) {
                alert ("MZ Y VIlla YA INGRESADAS!");
            } else{
                alert ("ERROR !")
            }
        }).addCase(buscarVillaController.pending, (state) => {
            state.isLoading = true
        }).addCase(buscarVillaController.fulfilled, (state, action) => {
            state.isLoading = false
            // console.log("aqui", action.payload.data.listadoUbicaciones)
            const estado = action.payload.estado
            if (estado === 1) {
                state.ubicaciones = action.payload.data.listadoUbicaciones
                // console.log(action.payload)
            } else {
                alert("NO EXISTE!");
            }
        }).addCase(nuevoUsuarioController.pending, (state) => {
            state.isLoading = true
        }).addCase(nuevoUsuarioController.fulfilled, (state, action) => {
            state.isLoading = false
            // console.log("aqui", action.payload.data.listadoUbicaciones)
            const estado = action.payload.estado
            if (estado === 1) {
                alert ("NUEVO USUARIO INGRESADO")
                // console.log(action.payload)
            }  else if (estado === 5) {
                alert ("EXISTE ESE USUARIO!");
            } else{
                alert ("ERROR !")
            }
        }).addCase(LoginController.pending, (state) => {
            state.isLoading = true
        }).addCase(LoginController.fulfilled, (state, action) => {
            state.isLoading = false
            // console.log("aqui", action.payload.data.listadoUbicaciones)
            const estado = action.payload.estado
            if (estado === 1) {
                alert ("USUARIO LOGUEADO")
                // console.log(action.payload)
            }   else{
                alert ("USUARIO O CONTRASEÑA INCORRECTO !")
            }
        })
    }

})
export const {
    setNuevoNumero,
    setNombres, setApellidos, setCedula, setContrasena,
    setCiudad , setUrbanizacion , setPropietario , setResidente , setMzv , 
    setVisitaUrbanizacion , setVisitaDestino , setVisitaAutorizacion ,setVisitaNombre , setVisitaCedula ,
}
    = MartinaSlice.actions;
export default MartinaSlice.reducer;