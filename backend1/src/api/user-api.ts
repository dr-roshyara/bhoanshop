import axios from "axios";
import middleware401 from "./middleware-401";
/**
 *aim:
 *Initialize Axios instance to call the API
 * @param {string} endpoint either 'web' or 'api' (default)
 * @returns {AxiosInstance}
 */

const useApi = (endpoint = "api" as string) => {
    const { API_HOST, API_PATH, API_URL } = import.meta.env;
    let baseUrl = "";
    if (endpoint === "api") {
        baseUrl = API_HOST + API_PATH || API_URL;
    } else if (endpoint === "web") {
        baseUrl = API_HOST || API_URL;
    }
    //define axios instance
    const AxiosInstance = axios.create({
        baseURL: baseUrl,
        timeout: 1000,
        headers: { "x-Request-with": "XMLHttpRequest" },
        withCredentials: true,
    });
    AxiosInstance.interceptors.response.use((resp) => resp, middleware401);
};

export { useApi as default };
