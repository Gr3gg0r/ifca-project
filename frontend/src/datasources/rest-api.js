import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api/auth",
  timeout: 5000
});

export default axiosInstance

