import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://ifca.shahfiq.xyz/api/auth",
  timeout: 5000
});

export default axiosInstance

