import axios from 'axios'

const httpRequest = axios.create({
    baseURL: "http://ergast.com/api/f1"
})
export default httpRequest;