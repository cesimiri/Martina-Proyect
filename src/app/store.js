import { configureStore } from '@reduxjs/toolkit'
import MartinaReducers from '../reducers/MartinaReducers'

const store = configureStore({
    reducer: {
        martina: MartinaReducers,
    }
})

export default store;