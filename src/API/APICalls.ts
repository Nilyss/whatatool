// libraries
import axios, { AxiosResponse } from "axios";

// utils
import { isOnProduction } from "../utils/scripts/utils.ts";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 10000;
axios.defaults.baseURL = isOnProduction()
  ? "http://192.168.0.112:8800/api"
  : "./public/mock";

export const postRequest = async <T, R>(
  url: string,
  data: T,
): Promise<AxiosResponse<R>> => {
  try {
    console.log('isOnProduction ?', isOnProduction())
    return await axios.post<R>(url, data);
  } catch (error) {
    console.error("Erreur in postRequest:", error);
    throw error;
  }
};
