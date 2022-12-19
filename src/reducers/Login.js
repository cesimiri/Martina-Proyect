import { createSlice } from "@reduxjs/toolkit"
import LoginController from "../controllers/login"
const initialState = {

    isLogin: false ,

    datosLogin : {
        variable1 : '',
        contrasena : '',
    }

}

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setVariable1: (state, action) => {
            const algo = action.payload
            state.datosLogin.variable1 = algo
        },
        setContrasena: (state, action) => {
            const algo = action.payload
            state.datosLogin.contrasena = algo
        },
        login: state => {
            state.isLogin = true
        }
    },
    extraReducers : (builder) =>{
        builder.addCase(LoginController.pending, (state) => {
            state.isLoading = true
        }).addCase(LoginController.fulfilled, (state, action) =>{
            state.isLoading = false

            const estado = action.payload.estado
            if (estado === 1) {
                state.isLogin = true
            }else{
                alert("USUARIO O CONTRASEÑA INCORRECTA!")
            }
            // console.log(action.payload.estado)
            // console.log(estado)

        })
    }
})

export const { login , setVariable1 , setContrasena } = LoginSlice.actions;

export default LoginSlice.reducer;