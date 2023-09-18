import axios from "axios";
import { MAX_RESULTS } from "constants/api";

const api = axios.create({ baseURL: process.env.BASE_URL });

api.interceptors.request.use(
  (config) => {
    const queryParams = `?key=${process.env.API_KEY}&maxResults=${MAX_RESULTS}`;
    config.url = `${config.url}${queryParams}`;

    return config;
  },
  (err) => {
    return err;
  }
);

export default api;
