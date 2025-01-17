import axios from "axios";

/** Axios Set up */
const BASE_URL = import.meta.env.VITE_BASE_URL;
axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

const httpService = {
    /**  Axios Get Request (endpoint | query-params) */
    get: (endpoint: string, params?: object) => {
        return axios.get(endpoint, { params });
    },
    post: (endpoint: string, payload?: object, queryParams?: object) => {
        return axios.post(endpoint, payload, { params: queryParams })
    }
}

export default httpService;