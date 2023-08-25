import axios from "axios"

export const Api = axios.create({
    baseURL:"https://futLendas.herokuapp.com",
    timeout:6000
})