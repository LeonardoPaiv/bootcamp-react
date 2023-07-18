import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 2000
});

export const httpGet = async (url = "path") => {
  const { data } = await axiosInstance.get(url);
  return data;
};
