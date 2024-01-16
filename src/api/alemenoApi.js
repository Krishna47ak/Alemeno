import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://run.mocky.io/v3/272f1df1-98e4-49a7-b9d0-44ec9a37a298'
})

export default instance;