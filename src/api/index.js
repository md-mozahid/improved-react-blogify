import axios from 'axios'
const serverApi = import.meta.env.VITE_SERVER_BASE_URL

const api = axios.create({
  baseURL: serverApi,
})

export { api, serverApi }
