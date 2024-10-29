import axios from "axios";
import "dotenv/config";

const SECRET_TOKEN = process.env.SECRET_TOKEN;
const BASE_URL = `https://api.telegram.org/bot${SECRET_TOKEN}`;

function callInstance() {
  return {
    get(method: string, params: object) {
      const url = `${BASE_URL}/${method}`;
      return axios.get(url, { params });
    },
    post(method: string, data: object) {
      return axios({
        method: "POST",
        url: `${method}`,
        baseURL: BASE_URL,
        data,
      });
    },
  };
}

export const axiosCallInstance = callInstance();
