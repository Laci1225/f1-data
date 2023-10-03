import axios from 'axios'

const params = {
    action: 'query',
    format: 'json',
    prop: 'extracts',
    exintro: true,
    explaintext: true,
};
export const httpRequest = axios.create({
    baseURL: "http://ergast.com/api/f1"
})
export const wikipediaRequest = axios.create({
    baseURL: "/api", params: params
})
