import axios from "axios";
const axiosBase = axios.create({
  baseURL: "https://evangadiforum-backend-deployement-24.onrender.com",
  // baseURL: "http://localhost:5000/api",

  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
