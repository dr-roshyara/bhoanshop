/* eslint-disable prettier/prettier */
import axios from "axios";
import middleware401 from "@/api/middleware-401";

/**
 * Initialize Axios instance to call the API
 * @param {string} endpoint either 'web' or 'api' (default)
 * @returns {AxiosInstance}
 */
export const useApi = (endpoint = "api", path = "/") => {
  const { VITE_BASE_URL, VITE_API_PATH } = import.meta.env;

  let baseURL;

  if (endpoint === "api") {
    baseURL = import.meta.env.VITE_API_URL;
  } else if (endpoint === "web") {
    baseURL = import.meta.env.VITE_BASE_URL;
  }

  const axiosInstance = axios.create({
    baseURL,
    headers: {
      "Access-Control-Allow-Origin": baseURL + path,
      "X-Requested-With": "XMLHttpRequest",
      //   "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json",
    },
    withCredentials: true,
  });

  axiosInstance.interceptors.response.use((resp) => resp, middleware401);

  return axiosInstance;
};
