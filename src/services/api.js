import axios from 'axios'

const api = axios.create({
  baseURL: "https://api.github.com/users/J-Borba/"
})

export default api