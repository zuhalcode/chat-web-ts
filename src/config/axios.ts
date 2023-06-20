import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api", // Replace with your axiosClient base URL
  timeout: 5000, // Adjust the timeout value as needed
});

export default axiosClient;
