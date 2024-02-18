import axios from "axios";
import { BASE_URL } from "./utils";

let axiosApi = axios.create({
  baseURL: BASE_URL
});

export default axiosApi;