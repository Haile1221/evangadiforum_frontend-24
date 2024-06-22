import axios from "axios";
const axiosBase = axios.create({
  // baseURL: "http://localhost:5000/api",

  baseURL:
    "https://vercel.com/hailes-projects-b71b915a/evangadiforum-backend-deployement-24",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
