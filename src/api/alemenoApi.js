import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://run.mocky.io/v3/1a988f13-39a1-49cd-a8ff-63f33e0fa9d3'
})

export default instance;