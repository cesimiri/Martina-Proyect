import axios from 'axios'

// const baseURL = import.meta.env.VITE_APP_URL

export const instanciaAxios = axios.create({
    // local
    baseURL: `http://192.168.10.73:82/api`,
    // produccion
    // baseURL: "http://181.188.196.2:9090/api",
    headers: {
        // 'Content-Type': 'application/json; charset=UTF-8',
        // 'x-token': localStorage.getItem('token') || '',
    },
})
