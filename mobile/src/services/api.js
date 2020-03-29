import axios from "axios"

const api = axios.create({
  baseURL: "http://seu ip:3333"
})

export default api