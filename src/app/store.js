import { configureStore } from '@reduxjs/toolkit'
import MartinaReducers from '../reducers/MartinaReducers'
import LoginReducers from '../reducers/Login'

const store = configureStore({
    reducer: {
        martina: MartinaReducers,
        login: LoginReducers,
    }
})

export default store;