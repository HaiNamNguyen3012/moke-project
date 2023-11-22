import axios from "axios";
import Cookies from "js-cookie";
import { refreshTokenApi, urlApi } from "./API";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "./token";
const axiosInstance = axios.create({
  baseURL: urlApi,
  headers: {
    'Authorization': `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}`,
    'Content-Type': 'application/json',
  }
});

axiosInstance.interceptors.request.use(async (request) => {
  const access_token = Cookies.get(ACCESS_TOKEN_KEY);
  const refresh_token  = Cookies.get(REFRESH_TOKEN_KEY);
  if(access_token) return request;
  if(refresh_token){
    try {
      
    } catch (error) {
      
    }
  } else {
    return request;
  }
});

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
