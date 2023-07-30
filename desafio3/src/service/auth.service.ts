import { Ilogin, User, UserResponse } from "../model/auth.model";
import { axiosInstance } from "./axiosInstance";

const getUser = async () => {
  const { data } = await axiosInstance.get<UserResponse>("sessao/usuario");
  return data;
};

const createSession = async (login: Ilogin): Promise<User> => {
  const {data} = await axiosInstance.post<UserResponse>(
    "sessao/criar",
    login
  );
  return data;
};

const logout = async (): Promise<void> => {
  await axiosInstance.post("/sessao/finalizar", {});
};

export default { getUser, createSession, logout };
