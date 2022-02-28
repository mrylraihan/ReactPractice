import apiUrl from "../apiConfig"
import axios from 'axios'


export const getKanyeQuote = () => {
    return axios.get(`${apiUrl}`)
}