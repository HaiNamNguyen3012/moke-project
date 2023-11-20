import axios from "axios";
import Cookies from "js-cookie";
import { refreshTokenApi, urlApi } from "./API";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "./token";
const axiosInstance = axios.create({
  baseURL: urlApi,
});

// axiosInstance.interceptors.request.use(async (req) => {
//   try {
//     const res = await axios.post(refreshTokenApi);
//     return req;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// });

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err.response.status);
    return Promise.reject(err);
  }
);

export default axiosInstance;
