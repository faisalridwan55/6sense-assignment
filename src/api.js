import axios from "axios";

const BASE_URL = "https://0a26fbd7-3872-4d0d-ae2e-f29d57eb3a6b.mock.pstmn.io";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
