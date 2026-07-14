import type { DeipositSettlementFormPayload } from "../interfaces";
import BASE_URL from "./base-url"

export const index = async(userId:string, status: number) => {
    try {
        const response = await BASE_URL.get(`/deposit/user/${userId}/${status}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Credit / Debit Settlement
export const fundCreditedDebeted = async (data: DeipositSettlementFormPayload) => {
     try {
       const response = await BASE_URL.post("/deposit/create", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};


// Credit / Debit Settlement
export const createOnlineTransferDeposit = async (data:  {
    userId: any;
    payBy: string | null;
    bankId: string;
    inrAmount: number;
    amount: number;
    declaration: boolean;
}) => {
     try {
       const response = await BASE_URL.post("/deposit/deposit-online", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const updateDepositStatus = async ( rowId: string, status: number) => {
  try {
    const response = await BASE_URL.put(`/deposit/${rowId}/status`, { status });
    return response.data;
  } catch (error) {
    throw error;
  }
};