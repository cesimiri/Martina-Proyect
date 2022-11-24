import axios from 'axios'

const baseURL = import.meta.env.VITE_APP_URL

export const instanciaAxios = axios.create({
    baseURL: `${baseURL}/api`,

    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'x-token': localStorage.getItem('token') || '',
    },
})
