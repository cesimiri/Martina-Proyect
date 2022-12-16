import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    isLogin: false
}

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: state => {
            state.isLogin = true
        }
    }
})

export const { login } = LoginSlice.actions;

export default LoginSlice.reducer;