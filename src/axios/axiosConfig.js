import axios from "axios";
const axiosBase = axios.create({
  // baseURL: "http://localhost:5000/api",

  baseURL: "https://evangadiforum-backend-deployement-24.onrender.com/",

  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
