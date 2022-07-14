
// const baseURL= "http://192.168.0.106/3000" // sumreen home 
import axios from 'axios'
const baseURL="http://192.168.1.100:3000"

const httpRequest = axios.create({baseURL})
 
 export { baseURL, httpRequest}