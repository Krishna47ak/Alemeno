import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://run.mocky.io/v3/1bc5627a-c77f-4686-82bd-75db767eaeb9'
})

export default instance;