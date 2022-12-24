/* eslint-disable prettier/prettier */
/** https://stackoverflow.com/questions/63200511/how-to-retrieve-laravel-csrf-token-using-separated-vue-frontend */
import axios from 'axios'
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
})
export default apiClient
