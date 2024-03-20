import axios from 'axios'

import { useAuthStore } from '@/stores'

const url = import.meta.env.VITE_API_URL
console.log(url, 'url');
const axiosInstance = axios.create({
  // baseURL: 'https://apartments-backend.onrender.com/api/'
  baseURL:url
  // http://localhost:5173
})

axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
