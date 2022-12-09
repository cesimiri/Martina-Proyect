import { createSlice } from "@reduxjs/toolkit";
import { IngresoGarita, ObtenerGarita } from "../controllers/garita";
import consultar from "../controllers/botonPanico";

const initialState = {
    numeroGarita: '',
    nuevoNumero: '',
    ubicaciones: [],
}

const MartinaSlice = createSlice({
    name: "martina",
    initialState: initialState,
    reducers: {
        setNuevoNumero: (state, action) => {
            const algo = action.payload
            state.nuevoNumero = algo
        },
    },
    // extraReducers: {
    //     [consultar.pending]: (state, action) => {
    //         state.isLoading = true

    //     },
    //     [consultar.fulfilled]: (state, action) => {
    //         state.isLoading = false
    //         // console.log("qui", action.payload.data.listadoUbicaciones)
    //         state.ubicaciones = action.payload.data.listadoUbicaciones
    //     },


    //     [ObtenerGarita.pending]: (state, action) => {
    //         state.isLoading = true

    //     },
    //     [ObtenerGarita.fulfilled]: (state, action) => {
    //         state.isLoading = false
    //         // console.log("obtener", action.payload.data.num.num.garita_fono)
    //         state.numeroGarita = action.payload.data.num.num.garita_fono
    //     },

    //     [IngresoGarita.fulfilled]: (state, action) => {
    //         state.isLoading = false
    //         console.log(action.payload)
    //         state.numeroGarita = action.payload.data
    //     },

    //     [IngresoGarita.rejected]: (state) => {
    //         state.isLoading = false
    //         console.log("sss")
    //     },
    // }

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
        }).addCase(consultar.pending , (state)=>{
            state.isLoading = true
        }).addCase(consultar.fulfilled, (state, action) =>{
            state.isLoading = false
            // console.log("qui", action.payload.data.listadoUbicaciones)
            state.ubicaciones = action.payload.data.listadoUbicaciones
        } )
    }

})

export const {
    setNuevoNumero,
}
    = MartinaSlice.actions;
export default MartinaSlice.reducer;