import axios from 'axios'
const serverApi = import.meta.env.VITE_SERVER_BASE_URL

const axiosInstance = axios.create({
  baseURL: serverApi,
})

export { axiosInstance, serverApi }
