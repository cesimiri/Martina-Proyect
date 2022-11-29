import { createSlice } from "@reduxjs/toolkit";
import { IngresoGarita, ObtenerGarita } from "../controllers/garita";

const initialState = {
    numeroGarita: '',
    nuevoNumero: '',
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
    extraReducers:{
        [ObtenerGarita.pending]: (state, action) => {
            state.isLoading = true

        },
        [ObtenerGarita.fulfilled]: (state, action) => {
            state.isLoading = false
                state.numeroGarita = action.payload.data.num.garita_fono
               
        },

        
        [IngresoGarita.fulfilled]: (state, action) => {
            state.isLoading = false
            console.log(action.payload)
                state.numeroGarita = action.payload.data
        },
    }

})

export const {
    setNuevoNumero ,
}
    = MartinaSlice.actions;
export default MartinaSlice.reducer;