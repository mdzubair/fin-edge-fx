import type { WithdrawFormPayload } from "../interfaces";
import BASE_URL from "./base-url";

export const fetchWithdrawByUser = async (userId: string, status:number) => {
  try {
    const response = await BASE_URL.get(`/withdraw/user/${userId}/${status}`);
    return response.data;
  } catch (error:any) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const getWithdrawById = async (rowId: string) => {
  try {
    const response = await BASE_URL.get(`/withdraw/${rowId}`);
    return response.data;
  } catch (error:any) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const store = async (data: WithdrawFormPayload) => {
  try {
    const response = await BASE_URL.post("/withdraw", data);
    return response.data;
  } catch (error:any) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const updateStatus = async ( rowId: string, status: number) => {
  try {
    const response = await BASE_URL.put(`/withdraw/${rowId}/status`,{ status });
    return response.data;
  } catch (error:any) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};
