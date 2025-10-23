import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://admin.aspirationjeeneet.in"
 
});

export default axiosInstance;

