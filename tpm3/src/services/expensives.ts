import { axiosInstance } from "./httpclient";
import { ExpensiveResponse } from "../model/expensive";

export const getExpensives = async (isoData: string) => {
  const response = await axiosInstance.get<ExpensiveResponse[]>(
    `/despesas?mes=${isoData}&_sort=dia`
  );

  let total = 0;
  
  for (const item of response.data) {
    total += item.valor;
  }
  
  return {expensive: response.data, total};
};
