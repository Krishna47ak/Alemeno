import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://run.mocky.io/v3/249d5d6d-71a6-4980-baa4-ecac0a2250f4'
})

export default instance;