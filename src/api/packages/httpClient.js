import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://registry.npmjs.org/-/v1',
})

export default httpClient
