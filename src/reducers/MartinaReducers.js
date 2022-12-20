import { createSlice } from "@reduxjs/toolkit";
import { IngresoGarita, ObtenerGarita } from "../controllers/garita";
import { consultarMV, consultarNum } from "../controllers/botonPanico";
import { ingresarVillaController } from "../controllers/villas";
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
            // en produccion la ruta no apunta al archivo, tiene la ruta para produccion
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
            } else {
                alert("NO EXISTE!");
            }
        })
    }

})
//ingresarVillaController 
export const {
    setNuevoNumero,
    setNombres, setApellidos, setCedula, setContrasena,
    setCiudad , setUrbanizacion , setPropietario , setResidente , setMzv 
}
    = MartinaSlice.actions;
export default MartinaSlice.reducer;