import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    /* access env fil med key */
    key: import.meta.env.API_KEY
  },
});

export default apiClient;