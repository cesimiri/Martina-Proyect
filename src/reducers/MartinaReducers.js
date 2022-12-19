import { createSlice } from "@reduxjs/toolkit";
import { IngresoGarita, ObtenerGarita } from "../controllers/garita";
import {consultarMV , consultarNum} from "../controllers/botonPanico";

const initialState = {
    numeroGarita: '',
    nuevoNumero: '',
    ubicaciones: [],
    datosNuevo: {
        nombres : '',
        apellidos : '',
        cedula : '', 
        contrasena: '',
    },

}

const MartinaSlice = createSlice({
    name: "martina",
    initialState: initialState,
    reducers: {
        setNuevoNumero: (state, action) => {
            const algo = action.payload
            state.nuevoNumero = algo
        },
        setNombres: (state, action) => {
            const algo = action.payload
            state.datosNuevo.nombres = algo
        },
        setApellidos: (state, action) =>{
            const algo = action.payload
            state.datosNuevo.apellidos = algo
        },
        setCedula: (state, action) =>{
            const algo = action.payload
            state.datosNuevo.cedula = algo
        },
        setContrasena: (state, action) =>{
            const algo = action.payload
            state.datosNuevo.contrasena = algo
        }
    },

    extraReducers: (builder) => {
        
        builder.addCase(ObtenerGarita.pending, (state) => {
            state.isLoading = true
            console.log("COMENSE")
        }).addCase(ObtenerGarita.fulfilled, (state, action) => {
            state.isLoading = false
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
        }).addCase(consultarMV.pending , (state)=>{
            state.isLoading = true
        }).addCase(consultarMV.fulfilled, (state, action) =>{
            state.isLoading = false
            console.log("martina", action.payload)
            const estado = action.payload.estado
            if (estado === 1) {
                state.ubicaciones = action.payload.data.listadoUbicaciones
            }else{
                alert("NO EXISTE!")
            }
        }).addCase(consultarNum.pending , (state)=>{
            state.isLoading = true
        }).addCase(consultarNum.fulfilled, (state, action) =>{
            state.isLoading = false
            // console.log("aqui", action.payload.data.listadoUbicaciones)
            const estado = action.payload.estado
            if (estado === 1) {
                state.ubicaciones = action.payload.data.listadoUbicaciones
            }else{
                alert("NO EXISTE!") ;
            }
        })
    }

})

export const {
    setNuevoNumero, 
    setNombres , setApellidos , setCedula , setContrasena , 
}
    = MartinaSlice.actions;
export default MartinaSlice.reducer;