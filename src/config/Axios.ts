import axios from 'axios'

const api = axios.create({
  baseURL: process.env.SQUIDEX_API_URL,
  withCredentials: true,
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'X-Languages': 'de',
    'X-Flatten': true,
    'Authorization': `Bearer ${process.env.SQUIDEX_API_TOKEN}`,
    'Content-Type': 'application/json'
  },
})

export default api